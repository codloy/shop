'use client';

import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { accountDrawerWidthAtom, accountDrawerOpenAtom } from 'atoms';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiToggleMode } from '@/lib/mui/components/MuiToggleMode';
import { I18nToggleLocale } from '@/lib/i18n/components/I18nToggleLocale';
import {
  SelectProductType,
  AccountStack,
  HomeAppBarSearch,
} from '@/components';

export function AccountAppBar() {
  const accountDrawerWidth = useAtomValue(accountDrawerWidthAtom);
  const [accountDrawerOpen, setAccountDrawerOpen] = useAtom(
    accountDrawerOpenAtom
  );

  function onToggleDrawer() {
    setAccountDrawerOpen(!accountDrawerOpen);
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { lg: `calc(100% - ${accountDrawerWidth}px)` },
        ml: { lg: `${accountDrawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={onToggleDrawer}
          sx={{ mr: 2, display: { lg: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant='subtitle1' noWrap component='div'>
          Responsive drawer
        </Typography> */}
        <HomeAppBarSearch />
        <SelectProductType />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction={'row'} spacing={2}>
          <MuiToggleMode />
          <I18nToggleLocale />

          <AccountStack />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
