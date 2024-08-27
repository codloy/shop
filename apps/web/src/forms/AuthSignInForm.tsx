'use client';

import { useZodForm, useNotify } from '@/hooks';
import { useI18n } from '@/lib/i18n/client';
import {
  AuthSignInSchema,
  authSignInSchema,
  authSignInSchemaDefaultValues,
} from 'schemas';
import { trpc } from '@/lib/trpc/trpc';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Link from 'next/link';
import { useSetAtom } from 'jotai';
import { accountAtom } from 'atoms';

export function AuthSignInForm() {
  const t = useI18n();
  const router = useRouter();
  const { handleSubmit, control, reset } = useZodForm<AuthSignInSchema>({
    schema: authSignInSchema,
    defaultValues: authSignInSchemaDefaultValues,
  });
  const { success, error, loading, setId, close } = useNotify();
  const searchParams = useSearchParams();
  const setAccount = useSetAtom(accountAtom);
  const signIn = trpc.authSignInMutation.useMutation({
    onSuccess(data) {
      success(t('Signed in'));

      localStorage.setItem('uid', data.id);
      localStorage.setItem('access_token', data.accessToken);

      reset(authSignInSchemaDefaultValues);

      setAccount({
        id: data.id,
        lastName: data.lastName,
        firstName: data.firstName,
        permissions: data.permissions,
        roleName: data.roleName,
        email: data.email,
      });

      const _continue = searchParams.get('continue');

      router.push(_continue ? _continue : '/');
    },
    onError({ message }) {
      error(message);
    },
    onSettled() {
      close();
    },
  });

  function onSubmit(data: AuthSignInSchema) {
    setId(loading(t('Нэвтэрч байна')));

    signIn.mutate({
      ...data,
      userAgent: navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
    });
  }

  return (
    <Grid
      container
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant='button' color='primary.main'>
          {t('Sign in')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <TextField
              label={t('Email')}
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <TextField
              label={t('Password')}
              type='password'
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <LoadingButton loading={signIn.isLoading} fullWidth>
          {t('Sign in')}
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        <Button
          LinkComponent={Link}
          href='/auth/sign-up'
          variant='outlined'
          fullWidth
        >
          {t('Sign up')}
        </Button>
      </Grid>
    </Grid>
  );
}
