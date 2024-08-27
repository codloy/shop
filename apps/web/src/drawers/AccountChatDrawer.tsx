import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { accountChatDrawerOpenAtom, accountChatDrawerWidthAtom } from 'atoms';
import { trpc } from '@/lib/trpc/trpc';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { useI18n } from '@/lib/i18n/client';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AccountChatSendForm } from '@/forms';
import { useState } from 'react';

export type AccountChatDrawerProps = {
  chatId: string;
};

export function AccountChatDrawer(props: AccountChatDrawerProps) {
  const { chatId } = props;
  const t = useI18n();
  const [open, setOpen] = useAtom(accountChatDrawerOpenAtom);
  const [width] = useAtom(accountChatDrawerWidthAtom);
  const [messages, setMessages] = useState<ChatMessageTable[]>([]);
  const { isLoading, isError, error, data, refetch } =
    trpc.accountChatQuery.useQuery(
      {
        chatId,
      },
      {
        onSuccess(data) {
          setMessages(data.results);
        },
      }
    );

  trpc.accountChatSendSubscription.useSubscription(
    { chatId },
    {
      onData(message) {
        setMessages(m => [...m, message]);
      },
      onError(err) {
        console.error('Subscription error:', err);
        // we might have missed a message - invalidate cache
        // utils.post.infinite.invalidate();
      },
    }
  );

  function onClose() {
    setOpen(false);
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
      <Stack>
        <Button onClick={onClose}>{t('Select chat')}</Button>
        <IconButton onClick={() => refetch()}>
          <RefreshIcon />
        </IconButton>
        {isLoading ? (
          <ResourceLoading />
        ) : isError ? (
          <ResourceError error={error} />
        ) : !data || !data.results.length ? (
          <ResourceEmpty />
        ) : (
          messages.map(result => (
            <Box key={result.id}>
              <Typography>{result.message}</Typography>
            </Box>
          ))
        )}

        <AccountChatSendForm />
      </Stack>
    </Drawer>
  );
}
