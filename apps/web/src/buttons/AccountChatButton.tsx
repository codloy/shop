'use client';

import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import ChatIcon from '@mui/icons-material/Chat';
import { Fragment } from 'react';
import { useAtom } from 'jotai';
import { accountChatsDrawerOpenAtom } from 'atoms';
import { AccountChatsDrawer } from '@/drawers';

export function AccountChatButton() {
  const t = useI18n();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down('lg');
  const isBreakpoint = useMediaQuery(breakpoint);
  const [open, setOpen] = useAtom(accountChatsDrawerOpenAtom);

  if (isBreakpoint) {
    return (
      <IconButton disabled>
        <ChatIcon />
      </IconButton>
    );
  }

  function onChat() {
    setOpen(true);
  }

  return (
    <Fragment>
      <Button
        onClick={onChat}
        startIcon={<ChatIcon />}
        variant='text'
        color='inherit'
      >
        {t('Chat')}
      </Button>

      {open && <AccountChatsDrawer />}
    </Fragment>
  );
}
