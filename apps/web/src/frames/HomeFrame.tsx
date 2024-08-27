'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { HomeAppBar } from '@/appBars';
import { HomeContainer } from '@/containers';
import { HomeBottomNavigation } from '@/components';
import { useAtomValue } from 'jotai';
import { authSignInDrawerAtom, homeCategoriesDrawerOpenAtom } from 'atoms';
import { HomeCategoriesDrawer, AuthSignInDrawer } from '@/drawers';

export type HomeFrameProps = PropsWithChildren<{}>;

export function HomeFrame(props: HomeFrameProps) {
  const { children } = props;
  const authSignInDrawer = useAtomValue(authSignInDrawerAtom);
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const categoryDrawer = useAtomValue(homeCategoriesDrawerOpenAtom);

  return (
    <Box sx={{ display: 'flex' }}>
      <HomeAppBar />
      <HomeContainer>{children}</HomeContainer>
      {isXS && <HomeBottomNavigation />}

      {categoryDrawer && <HomeCategoriesDrawer />}

      {authSignInDrawer.open && <AuthSignInDrawer />}
    </Box>
  );
}
