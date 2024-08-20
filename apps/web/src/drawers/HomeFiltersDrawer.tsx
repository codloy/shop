'use client';

import { Box, Drawer, List, Stack } from '@mui/material';
import { homeFiltersDrawerWidthAtom, homeFiltersDrawerOpenAtom } from 'atoms';
import { useAtom, useAtomValue } from 'jotai';
import {
  HomeFilterProductAvailabilitiesForm,
  HomeFilterProductConditionsForm,
  HomeFilterProductDeliveryOptionsForm,
  HomeFilterProductStatusesForm,
  HomeFilterProductTypesForm,
  HomeFilterProductCategoriesForm,
} from '@/forms';

export type HomeFiltersDrawerProps = {
  categorySlugs: string[];
};

export function HomeFiltersDrawer(props: HomeFiltersDrawerProps) {
  const { categorySlugs } = props;
  const homeFiltersDrawerWidth = useAtomValue(homeFiltersDrawerWidthAtom);
  const [homeFiltersDrawerOpen, setHomeFiltersDrawerOpen] = useAtom(
    homeFiltersDrawerOpenAtom
  );

  function onClose() {
    setHomeFiltersDrawerOpen(false);
  }

  return (
    <Box
      component='nav'
      sx={{ width: { lg: homeFiltersDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        anchor='right'
        variant={homeFiltersDrawerOpen ? 'temporary' : 'permanent'}
        open={homeFiltersDrawerOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: homeFiltersDrawerOpen ? true : false,
        }}
        sx={{
          display: {
            xs: homeFiltersDrawerOpen ? 'block' : 'none',
            sm: homeFiltersDrawerOpen ? 'block' : 'none',
            md: homeFiltersDrawerOpen ? 'block' : 'none',
            lg: homeFiltersDrawerOpen ? 'none' : 'block',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: homeFiltersDrawerWidth,
          },
        }}
      >
        <List>
          <Stack spacing={2} sx={{ p: 2 }}>
            <HomeFilterProductAvailabilitiesForm />
            <HomeFilterProductConditionsForm />
            <HomeFilterProductDeliveryOptionsForm />
            <HomeFilterProductStatusesForm />
            <HomeFilterProductTypesForm />
            <HomeFilterProductCategoriesForm categorySlugs={categorySlugs} />
          </Stack>
        </List>
      </Drawer>
    </Box>
  );
}
