'use client';

import { useI18n } from '@/lib/i18n/client';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import {
  AccountChatSendSchema,
  accountChatSendSchemaDefaultValues,
  accountChatSendSchema,
} from 'schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '@/lib/trpc/trpc';
import { accountChatSelectedIdAtom } from 'atoms';
import { useAtom } from 'jotai';

export function AccountChatSendForm() {
  const t = useI18n();
  const [chatId, _setChatId] = useAtom(accountChatSelectedIdAtom);
  const { handleSubmit, control, reset } = useForm<AccountChatSendSchema>({
    resolver: zodResolver(accountChatSendSchema),
    defaultValues: {
      ...accountChatSendSchemaDefaultValues,
      chatId,
    },
  });
  const accountChatCreate = trpc.accountChatSendMutation.useMutation({
    onSuccess() {
      reset({
        chatId,
        message: '',
      });
    },
  });

  function onSubmit(data: AccountChatSendSchema) {
    accountChatCreate.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ p: 2 }} spacing={2}>
        <Controller
          control={control}
          name='message'
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              multiline
              rows={5}
            />
          )}
        />
        <LoadingButton loading={accountChatCreate.isLoading}>
          {t('Create chat')}
        </LoadingButton>
      </Stack>
    </form>
  );
}
