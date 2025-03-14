'use client';

import { AccountSellProductCreateForm } from '@/forms/AccountSellProductCreateForm';
import { AccountFrame } from '@/frames/AccountFrame';
import { Container } from '@mui/material';

export function AccountProductSellCreateScreen() {
  return (
    <AccountFrame>
      <Container maxWidth='md' sx={{ p: 2 }}>
        <AccountSellProductCreateForm onSuccess={() => {}} />
      </Container>
    </AccountFrame>
  );
}
