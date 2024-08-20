'use client';

import { trpc } from '@/lib/trpc/trpc';
import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Link from 'next/link';
import { LoadingButton } from '@mui/lab';
import { useI18n } from '@/lib/i18n/client';

export function AccountProfileButton() {
  const t = useI18n();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down('lg');
  const isBreakpoint = useMediaQuery(breakpoint);
  const { isLoading, isFetching, isError, data } =
    trpc.accountProfileQuery.useQuery();

  if (isBreakpoint) {
    if (isLoading) {
      return (
        <IconButton disabled>
          <AutorenewIcon />
        </IconButton>
      );
    }

    if (isError) {
      return (
        <IconButton>
          <LoginIcon />
        </IconButton>
      );
    }

    return (
      <IconButton LinkComponent={Link} href='/account/profile'>
        <PersonIcon />
      </IconButton>
    );
  }

  if (isLoading || isFetching) {
    return <LoadingButton loading>{t('Account')}</LoadingButton>;
  }

  if (isError) {
    return (
      <Button
        LinkComponent={Link}
        href='/auth/sign-in'
        variant='text'
        color='inherit'
        startIcon={<LoginIcon />}
      >
        {t('Sign in')}
      </Button>
    );
  }

  return (
    <Button
      LinkComponent={Link}
      href='/account'
      startIcon={<PersonIcon />}
      variant='text'
      color='inherit'
    >
      {`${data?.result?.lastName.charAt(0)}. ${data?.result?.firstName}`}
    </Button>
  );
}
