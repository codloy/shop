'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import { MuiToggleMode } from './MuiToggleMode';
import { useI18n } from '@/lib/i18n/client';

export function MuiDebugger() {
  const t = useI18n();
  const theme = useTheme();

  return (
    <Box>
      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <MuiToggleMode />
        <Typography variant='subtitle2'>
          {theme.palette.mode === 'dark' ? t('Dark mode') : t('Light mode')}
        </Typography>
      </Stack>
    </Box>
  );
}
