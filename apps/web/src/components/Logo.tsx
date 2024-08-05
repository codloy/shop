'use client';

import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { LogoIcon } from './LogoIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export function Logo() {
  const router = useRouter();

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
        }}
        spacing={0.5}
        onClick={onHomePage}
        onDoubleClick={onAdminPage}
      >
        <ShoppingBagIcon />
        <Typography>codloy.shop</Typography>
      </Stack>
    </Stack>
  );
}
