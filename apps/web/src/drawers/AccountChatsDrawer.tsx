import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { useAtom } from 'jotai';
import { accountChatsDrawerOpenAtom, accountChatsDrawerWidthAtom } from 'atoms';
import { LoadingButton } from '@mui/lab';
import { useI18n } from '@/lib/i18n/client';
import { accountChatCreateDrawerOpenAtom } from 'atoms';
import { AccountChatCreateDrawer, AccountChatDrawer } from '@/drawers';
import { trpc } from '@/lib/trpc/trpc';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { accountChatDrawerOpenAtom, accountChatSelectedIdAtom } from 'atoms';

export function AccountChatsDrawer() {
  const t = useI18n();
  const [open, setOpen] = useAtom(accountChatsDrawerOpenAtom);
  const [width] = useAtom(accountChatsDrawerWidthAtom);
  const [createOpen, setCreateOpen] = useAtom(accountChatCreateDrawerOpenAtom);
  const { isLoading, isError, error, data } = trpc.accountChatsQuery.useQuery();
  const [chatId, setChatId] = useAtom(accountChatSelectedIdAtom);
  const [chatOpen, chatSetOpen] = useAtom(accountChatDrawerOpenAtom);

  function onClose() {
    setOpen(false);
  }

  function onChatId(chatId: string) {
    setChatId(chatId);
    chatSetOpen(true);
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
      <Stack sx={{ p: 2 }}>
        <LoadingButton onClick={() => setCreateOpen(true)}>
          {t('Create')}
        </LoadingButton>
      </Stack>

      {isLoading ? (
        <ResourceLoading />
      ) : isError ? (
        <ResourceError error={error} />
      ) : !data || !data.results.length ? (
        <ResourceEmpty />
      ) : (
        <List>
          {data.results.map(result => (
            <ListItem key={result.id}>
              <ListItemButton onClick={() => onChatId(result.id)}>
                <ListItemText>
                  {result.members.map(member => member.accountId)}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      {createOpen && <AccountChatCreateDrawer />}
      {chatOpen && <AccountChatDrawer chatId={chatId} />}
    </Drawer>
  );
}
