'use client';

import { Box, Stack, Typography } from '@mui/material';
import { I18nToggleLocale } from './I18nToggleLocale';
import { useCurrentLocale, useI18n } from '../client';

export function I18nDebugger() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();

  return (
    <Box>
      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        <I18nToggleLocale />
        <Typography variant='subtitle2'>
          {currentLocale === 'en' ? t('English') : t('Mongolian')}
        </Typography>
      </Stack>
    </Box>
  );
}
