'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { HomeAppBar } from '@/appBars';
import { HomeContainer } from '@/containers';
import { HomeBottomNavigation } from '@/components';
import { useAtomValue } from 'jotai';
import { homeCategoriesDrawerOpenAtom } from 'atoms';
import { HomeCategoriesDrawer } from '@/drawers';

export type HomeFrameProps = PropsWithChildren<{
  categorySlugs: string[];
  productType: ProductTypeEnum;
}>;

export function HomeFrame(props: HomeFrameProps) {
  const { categorySlugs, productType } = props;

  const { children } = props;
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const categoryDrawer = useAtomValue(homeCategoriesDrawerOpenAtom);

  return (
    <Box sx={{ display: 'flex' }}>
      <HomeAppBar />
      <HomeContainer>{children}</HomeContainer>
      {isXS && <HomeBottomNavigation />}

      {categoryDrawer && (
        <HomeCategoriesDrawer
          categorySlugs={categorySlugs}
          productType={productType}
        />
      )}
    </Box>
  );
}
