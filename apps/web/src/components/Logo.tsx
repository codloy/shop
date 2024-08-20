'use client';

import {
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
// import { LogoIcon } from './LogoIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export type LogoProps = StackProps;

export function Logo(props: LogoProps) {
  const { ...stackProps } = props;
  const router = useRouter();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const isSM = useMediaQuery(theme.breakpoints.only('sm'));
  const isMD = useMediaQuery(theme.breakpoints.only('md'));
  const isLG = useMediaQuery(theme.breakpoints.only('lg'));
  const isXL = useMediaQuery(theme.breakpoints.only('xl'));

  function onHomePage() {
    router.push('/');
  }

  function onAdminPage() {
    router.push('/admin');
  }

  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'}>
      {/* <LogoIcon color='success' fontSize='small' /> */}
      <Stack
        direction={'row'}
        alignItems={'center'}
        sx={{
          cursor: 'pointer',
          userSelect: 'none',
          // position: 'absolute',
          // left: 42,
          // bottom: 20,
          ...stackProps.sx,
        }}
        spacing={0.5}
        onClick={onHomePage}
        onDoubleClick={onAdminPage}
        {...stackProps}
      >
        <ShoppingBagIcon />
        <Typography>codloy.shop</Typography>
        <Typography variant='button'>
          {isXS && 'XS'}
          {isSM && 'SM'}
          {isMD && 'MD'}
          {isLG && 'LG'}
          {isXL && 'XL'}
        </Typography>
      </Stack>
    </Stack>
  );
}
