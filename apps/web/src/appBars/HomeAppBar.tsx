'use client';

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material';
import { useAtom } from 'jotai';
import MenuIcon from '@mui/icons-material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';
import { homeFiltersDrawerOpenAtom, homeCategoriesDrawerOpenAtom } from 'atoms';
import {
  AccountProfileButton,
  AccountChatButton,
  AccountNotificationButton,
  AccountCreateProductButton,
} from '@/buttons';
import { HomeAppBarSearch } from '@/components/HomeAppBarSearch';
import { SelectProductType } from '@/components/SelectProductType';
import { Logo } from '@/components';
import { homeAppBarContainerMaxWidth } from '@/consts';

export function HomeAppBar() {
  const [homeCategoriesDrawerOpen, setHomeCategoriesDrawerOpen] = useAtom(
    homeCategoriesDrawerOpenAtom
  );
  const [homeFiltersDrawerOpen, setHomeFiltersDrawerOpen] = useAtom(
    homeFiltersDrawerOpenAtom
  );

  function onToggleCategoryDrawer() {
    setHomeCategoriesDrawerOpen(!homeCategoriesDrawerOpen);
  }

  function onToggleFilterDrawer() {
    setHomeFiltersDrawerOpen(!homeFiltersDrawerOpen);
  }

  return (
    <AppBar position='fixed'>
      <Container maxWidth={homeAppBarContainerMaxWidth}>
        <Toolbar sx={{ px: 1 }}>
          <Logo sx={{ mr: 2 }} />

          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={onToggleCategoryDrawer}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <HomeAppBarSearch />
          <SelectProductType />

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction={'row'} spacing={1.4}>
            <AccountCreateProductButton />
            <AccountNotificationButton />
            <AccountChatButton />
            <AccountProfileButton />
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={onToggleFilterDrawer}
              sx={{ mr: 2, display: { lg: 'none' } }}
            >
              <FilterListIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
