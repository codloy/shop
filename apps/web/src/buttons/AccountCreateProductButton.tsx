'use client';

import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';

export function AccountCreateProductButton() {
  const t = useI18n();
  const theme = useTheme();
  const xs = theme.breakpoints.down('sm');
  const isXS = useMediaQuery(xs);

  if (isXS) {
    return (
      <IconButton LinkComponent={Link} href='/account/products/create'>
        <AddBoxIcon />
      </IconButton>
    );
  }

  return (
    <Button
      LinkComponent={Link}
      href='/account/products/create'
      startIcon={<AddBoxIcon />}
      variant='text'
      color='inherit'
    >
      {t('Create product')}
    </Button>
  );
}
