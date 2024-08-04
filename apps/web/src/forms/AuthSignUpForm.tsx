'use client';

import { useZodForm, useNotify } from '@/hooks';
import { useI18n } from '@/lib/i18n/client';
import {
  AuthSignUpSchema,
  authSignUpSchemaDefaultValues,
  authSignUpSchema,
} from 'schemas';
import { trpc } from '@/lib/trpc/trpc';
import { useRouter } from 'next/navigation';
import { Controller } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';

export function AuthSignUpForm() {
  const t = useI18n();
  const router = useRouter();
  const { handleSubmit, control, reset } = useZodForm<AuthSignUpSchema>({
    schema: authSignUpSchema,
    defaultValues: authSignUpSchemaDefaultValues,
  });
  const { success, error, loading, setId, close, info } = useNotify();
  const authSignUpMutation = trpc.authSignUpMutation.useMutation({
    onSuccess() {
      success(t('Signed up'));

      reset(authSignUpSchemaDefaultValues);

      router.push('/auth/sign-in');
    },
    onError({ message }) {
      error(message);
    },
    onSettled() {
      close();
    },
  });

  function onSubmit(data: AuthSignUpSchema) {
    if (data.password !== data.confirmPassword) {
      info(t('Passwords are not same'));
      return;
    }

    setId(loading(t('Бүртгэж байна')));

    authSignUpMutation.mutate(data);
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
          {t('Sign up')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name='lastName'
          render={({ field, fieldState }) => (
            <TextField
              label={t('Last name')}
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
          name='firstName'
          render={({ field, fieldState }) => (
            <TextField
              label={t('First name')}
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
          name='username'
          render={({ field, fieldState }) => (
            <TextField
              label={t('Username')}
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
          name='email'
          render={({ field, fieldState }) => (
            <TextField
              type='email'
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
          name='phoneNumber'
          render={({ field, fieldState }) => (
            <TextField
              type='tel'
              label={t('Утасны дугаар')}
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
              type='password'
              label={t('Password')}
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
          name='confirmPassword'
          render={({ field, fieldState }) => (
            <TextField
              type='password'
              label={t('Confirm password')}
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingButton loading={authSignUpMutation.isLoading} fullWidth>
          {t('Sign up')}
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        <Button
          LinkComponent={Link}
          href='/auth/sign-in'
          variant='outlined'
          fullWidth
        >
          {t('Sign in')}
        </Button>
      </Grid>
    </Grid>
  );
}
