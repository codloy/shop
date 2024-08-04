'use client';

import { Button } from '@mui/material';
import { useChangeLocale, useCurrentLocale, useI18n } from '../client';
import LanguageIcon from '@mui/icons-material/Language';

export function I18nToggleLocale() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  function toggleLocale() {
    changeLocale(currentLocale === 'en' ? 'mn' : 'en');
  }

  return (
    <Button
      onClick={toggleLocale}
      startIcon={<LanguageIcon />}
      variant='text'
      color='inherit'
    >
      {t('Toggle locale')}
    </Button>
  );
}
