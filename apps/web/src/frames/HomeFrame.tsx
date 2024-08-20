'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { HomeAppBar } from '@/appBars';
import { HomeContainer } from '@/containers';
import { HomeBottomNavigation } from '@/components';

export type HomeFrameProps = PropsWithChildren<{}>;

export function HomeFrame(props: HomeFrameProps) {
  const { children } = props;
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Box sx={{ display: 'flex' }}>
      <HomeAppBar />
      {/* <HomeCategoriesDrawer categorySlugs={categorySlugs} /> */}
      <HomeContainer>{children}</HomeContainer>
      {isXS && <HomeBottomNavigation />}
    </Box>
  );
}
