'use client';

import { useAtom } from 'jotai';
import { accountSellProductCommentCreateAtom } from 'atoms';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import CloseIcon from '@mui/icons-material/Close';
import {
  accountSellProductCommentCreateDefaultSchema,
  accountSellProductCommentCreateSchema,
  AccountSellProductCommentCreateSchema,
} from 'schemas';
import { useZodForm } from '@/hooks';
import { Controller } from 'react-hook-form';
import CommentIcon from '@mui/icons-material/Comment';
import { trpc } from '@/lib/trpc/trpc';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export function AccountSellProductCommentCreateDialog() {
  const t = useI18n();
  const { enqueueSnackbar } = useSnackbar();
  const [accountSellProductCommentCreate, setAccountSellProductCommentCreate] =
    useAtom(accountSellProductCommentCreateAtom);
  const { handleSubmit, control, formState, setValue } =
    useZodForm<AccountSellProductCommentCreateSchema>({
      schema: accountSellProductCommentCreateSchema,
      defaultValues: accountSellProductCommentCreateDefaultSchema,
    });
  const accountSellProductCommentCreateMutation =
    trpc.accountSellProductCommentCreateMutation.useMutation({
      onSuccess() {
        enqueueSnackbar('Сэтгэгдэл амжилттай бүртгэлээ', {
          variant: 'success',
        });

        onClose();
      },
    });

  useEffect(() => {
    setValue('sellProductId', accountSellProductCommentCreate.sellProductId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(formState.errors);

  function onClose() {
    setAccountSellProductCommentCreate({
      open: false,
      sellProductId: '',
    });
  }

  function onSubmit(data: AccountSellProductCommentCreateSchema) {
    accountSellProductCommentCreateMutation.mutate(data);
  }

  return (
    <Dialog open={accountSellProductCommentCreate.open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography>{t('Сэтгэгдэл бичих')}</Typography>

            <Tooltip title={t('Цонх хаах')}>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography component='legend'>{t('Үнэлгээ')}</Typography>
                <Controller
                  control={control}
                  name='rating'
                  render={({ field }) => (
                    <Rating
                      value={field.value}
                      onChange={(_event, newValue) => {
                        field.onChange(newValue);
                      }}
                    />
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name='comment'
                render={({ field, fieldState }) => (
                  <TextField
                    label={t('Сэтгэгдэл')}
                    multiline
                    rows={5}
                    {...field}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant='text'>
            {t('Цонх хаах')}
          </Button>
          <Button type='submit' startIcon={<CommentIcon />}>
            {t('Сэтгэгдэл бичих')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
