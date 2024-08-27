'use client';

import { Box, Divider, Drawer, Toolbar } from '@mui/material';
import {
  homeCategoriesDrawerOpenAtom,
  homeCategoriesDrawerWidthAtom,
} from 'atoms';
import { useAtom, useAtomValue } from 'jotai';
import { Logo } from '@/components/Logo';
import { HomeCategoriesList } from '@/lists';
import { FilterList } from '@/components/FilterList';

export type HomeCategoriesDrawerProps = {
  categorySlugs: string[];
  productType: ProductTypeEnum;
};

export function HomeCategoriesDrawer(props: HomeCategoriesDrawerProps) {
  const { categorySlugs, productType } = props;
  const homeCategoriesDrawerWidth = useAtomValue(homeCategoriesDrawerWidthAtom);
  const [homeCategoriesDrawerOpen, setHomeCategoriesDrawerOpen] = useAtom(
    homeCategoriesDrawerOpenAtom
  );

  function onClose() {
    setHomeCategoriesDrawerOpen(false);
  }

  return (
    <Box
      component='nav'
      sx={{ width: { lg: homeCategoriesDrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant={homeCategoriesDrawerOpen ? 'temporary' : 'permanent'}
        open={homeCategoriesDrawerOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: homeCategoriesDrawerOpen ? true : false,
        }}
        sx={{
          display: {
            xs: homeCategoriesDrawerOpen ? 'block' : 'none',
            sm: homeCategoriesDrawerOpen ? 'block' : 'none',
            md: homeCategoriesDrawerOpen ? 'block' : 'none',
            lg: homeCategoriesDrawerOpen ? 'none' : 'block',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: homeCategoriesDrawerWidth,
          },
        }}
      >
        <Toolbar>
          <Logo />
        </Toolbar>
        <Divider />
        <FilterList />
        <Divider />
        <HomeCategoriesList
          productType={productType}
          categorySlugs={categorySlugs}
        />
      </Drawer>
    </Box>
  );
}
