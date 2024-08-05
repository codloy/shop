'use client';

import { Box, Divider, Drawer, Toolbar } from '@mui/material';
import { accountDrawerWidthAtom, accountDrawerOpenAtom } from 'atoms';
import { useAtom, useAtomValue } from 'jotai';
import { Logo, FilterList } from '@/components';

export function AccountDrawer() {
  const accountDrawerWidth = useAtomValue(accountDrawerWidthAtom);
  const [accountDrawerOpen, setAccountDrawerOpen] = useAtom(
    accountDrawerOpenAtom
  );

  const onDrawerClose = () => {
    setAccountDrawerOpen(false);
  };

  return (
    <Box
      component='nav'
      sx={{ width: { lg: accountDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant={accountDrawerOpen ? 'temporary' : 'permanent'}
        open={accountDrawerOpen}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: accountDrawerOpen ? true : false,
        }}
        sx={{
          display: {
            xs: accountDrawerOpen ? 'block' : 'none',
            sm: accountDrawerOpen ? 'block' : 'none',
            md: accountDrawerOpen ? 'block' : 'none',
            lg: accountDrawerOpen ? 'none' : 'block',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: accountDrawerWidth,
          },
        }}
      >
        <Toolbar>
          <Logo />
        </Toolbar>
        <Divider />
        <FilterList />
      </Drawer>
    </Box>
  );
}
