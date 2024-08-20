import { Box, Container, Toolbar } from '@mui/material';
import { useAtomValue } from 'jotai';
import { PropsWithChildren } from 'react';
import {
  homeFiltersDrawerWidthAtom,
  homeCategoriesDrawerWidthAtom,
} from 'atoms';
import { homeAppBarContainerMaxWidth } from '@/consts';

export type HomeContainerProps = PropsWithChildren<{}>;

export function HomeContainer(props: HomeContainerProps) {
  const { children } = props;
  const homeCategoriesDrawerWidth = useAtomValue(homeCategoriesDrawerWidthAtom);
  const homeFiltersDrawerWidth = useAtomValue(homeFiltersDrawerWidthAtom);

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        // p: 3,
        width: {
          xs: `calc(100% - ${homeCategoriesDrawerWidth}px - ${homeFiltersDrawerWidth}px)`,
        },
      }}
    >
      <Toolbar />
      <Box>
        <Container maxWidth={homeAppBarContainerMaxWidth}>{children}</Container>
      </Box>
    </Box>
  );
}
