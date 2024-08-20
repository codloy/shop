'use client';

import { Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function AccountNotificationButton() {
  const t = useI18n();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down('lg');
  const isBreakpoint = useMediaQuery(breakpoint);

  if (isBreakpoint) {
    return (
      <IconButton disabled>
        <NotificationsIcon />
      </IconButton>
    );
  }

  return (
    <Button
      // LinkComponent={Link}
      // href='/account/profile'
      startIcon={<NotificationsIcon />}
      variant='text'
      color='inherit'
      disabled
    >
      {t('Notification')}
    </Button>
  );
}
