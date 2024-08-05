'use client';

import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { AccountAppBar } from '@/appBars';
import { AccountDrawer } from '@/drawers';
import { AccountContainer } from '@/containers';
import { AccountGuard } from '@/guards';

export type AccountFrameProps = PropsWithChildren<{}>;

export function AccountFrame(props: AccountFrameProps) {
  const { children } = props;

  return (
    <AccountGuard>
      <Box sx={{ display: 'flex' }}>
        <AccountAppBar />
        <AccountDrawer />
        <AccountContainer>{children}</AccountContainer>
      </Box>
    </AccountGuard>
  );
}
