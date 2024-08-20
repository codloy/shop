import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import { useAtom } from 'jotai';
import {
  accountChatCreateDrawerOpenAtom,
  accountChatCreateDrawerWidthAtom,
} from 'atoms';
import { LoadingButton } from '@mui/lab';
import { useI18n } from '@/lib/i18n/client';
import { ResourceSearch } from '@/lib/resource/components/ResourceSearch';
import { useState } from 'react';
import { trpc } from '@/lib/trpc/trpc';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import {
  AccountChatCreateSchema,
  accountChatCreateSchemaDefaultValues,
  accountChatCreateSchema,
} from 'schemas';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function AccountChatCreateDrawer() {
  const t = useI18n();
  const [open, setOpen] = useAtom(accountChatCreateDrawerOpenAtom);
  const [width] = useAtom(accountChatCreateDrawerWidthAtom);
  const [search, setSearch] = useState('');
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, isError, error, data } =
    trpc.accountAccountsQuery.useQuery({
      search,
      take: search ? 10 : 0,
    });
  const { handleSubmit, control, reset, watch, setValue } =
    useForm<AccountChatCreateSchema>({
      resolver: zodResolver(accountChatCreateSchema),
      defaultValues: accountChatCreateSchemaDefaultValues,
    });
  const accountChatCreate = trpc.accountChatCreateMutation.useMutation({
    onSuccess() {
      reset();
      onClose();
    },
  });

  function onClose() {
    setOpen(false);
  }

  function onSubmit(data: AccountChatCreateSchema) {
    accountChatCreate.mutate(data);
  }

  return (
    <Drawer
      variant='temporary'
      open={open}
      onClose={onClose}
      anchor='right'
      PaperProps={{
        sx: {
          width,
        },
      }}
    >
      <ResourceSearch
        searchProps={{ search, setSearch, localSearch, setLocalSearch }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ p: 2 }} spacing={2}>
          {isLoading ? (
            <ResourceLoading />
          ) : isError ? (
            <ResourceError error={error} />
          ) : !data || !data.results.length ? (
            <ResourceEmpty />
          ) : (
            <List disablePadding>
              {data.results.map(result => (
                <ListItem key={result.id} disablePadding>
                  <ListItemButton
                    selected={result.id === watch('recipientId')}
                    onClick={() => setValue('recipientId', result.id)}
                  >
                    <ListItemText>{result.email}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

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
    </Drawer>
  );
}
