'use client';

import { AuthFrame } from '@/frames';
import { AuthSignUpForm } from '@/forms';
import { Container, Paper } from '@mui/material';

export function AuthSignUpScreen() {
  return (
    <AuthFrame>
      <Container maxWidth='xs' sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <AuthSignUpForm />
        </Paper>
      </Container>
    </AuthFrame>
  );
}
