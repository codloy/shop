'use client';

import { Container } from '@mui/material';
import { AccountFrame } from '../../../frame';
import { AccountProductSellCreateForm } from './form';

export function AccountProductSellCreateScreen() {
  return (
    <AccountFrame>
      <Container maxWidth='md' sx={{ p: 2 }}>
        <AccountProductSellCreateForm onSuccess={() => {}} />
      </Container>
    </AccountFrame>
  );
}
