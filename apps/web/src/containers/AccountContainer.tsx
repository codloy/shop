import { Box, Toolbar } from '@mui/material';
import { useAtomValue } from 'jotai';
import { accountDrawerWidthAtom } from 'atoms';
import { PropsWithChildren } from 'react';

export type AccountContainerProps = PropsWithChildren<{}>;

export function AccountContainer(props: AccountContainerProps) {
  const { children } = props;
  const accountDrawerWidth = useAtomValue(accountDrawerWidthAtom);

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        // p: 3,
        width: { lg: `calc(100% - ${accountDrawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
}
