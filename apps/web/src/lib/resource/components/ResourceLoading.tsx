'use client';

import { useI18n } from '@/lib/i18n/client';
import { Box, CircularProgress, Typography } from '@mui/material';

export function ResourceLoading() {
  const t = useI18n();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />

      <Typography>{t('Resource loading')}</Typography>
    </Box>
  );
}
