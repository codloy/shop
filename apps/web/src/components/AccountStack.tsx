'use client';

import { accountMenuAtom } from 'atoms';
import { AccountMenu } from '@/menus';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { trpc } from '@/lib/trpc/trpc';
import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { Fragment, MouseEvent } from 'react';

export type AccountStackProps = {
  showRole?: boolean;
};

export function AccountStack(props: AccountStackProps) {
  const { showRole = false } = props;
  const { isLoading, isError, error, data } =
    trpc.accountProfileQuery.useQuery();
  const [menu, setMenu] = useAtom(accountMenuAtom);

  function onAccount(e: MouseEvent<HTMLDivElement>) {
    setMenu({
      open: true,
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <Fragment>
      {isLoading ? (
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Skeleton variant='circular' width={35} height={35} />
          <Stack>
            <Typography variant='body2'>
              <Skeleton />
            </Typography>
            <Typography variant='caption'>
              <Skeleton />
            </Typography>
          </Stack>
        </Stack>
      ) : isError ? (
        <ResourceError error={error} />
      ) : !data ? (
        <ResourceEmpty />
      ) : (
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          sx={{ cursor: 'pointer' }}
          onClick={onAccount}
        >
          <Avatar
            sx={{ width: 35, height: 35 }}
            src={data.result.profilePictureURL || undefined}
          />
          <Stack>
            <Typography variant='body2'>{`${data.result.lastName.charAt(0)}. ${
              data.result.firstName
            }`}</Typography>
            <Typography variant='caption'>{`${
              showRole ? data.result.roleId : data.result.email
            }`}</Typography>
          </Stack>
        </Stack>
      )}

      {menu.open && <AccountMenu />}
    </Fragment>
  );
}
