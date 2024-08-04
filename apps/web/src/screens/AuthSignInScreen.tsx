'use client';

import { Container, Paper } from '@mui/material';
import { AuthFrame } from '@/frames';
import { AuthSignInForm } from '@/forms';

export function AuthSignInScreen() {
  return (
    <AuthFrame>
      <Container maxWidth='xs' sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <AuthSignInForm />
        </Paper>
      </Container>
    </AuthFrame>
  );
}
