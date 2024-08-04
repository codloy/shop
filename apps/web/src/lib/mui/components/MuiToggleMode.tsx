'use client';

import { Button } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useI18n } from '@/lib/i18n/client';

export function MuiToggleMode() {
  const t = useI18n();
  const { mode, setMode } = useColorScheme();

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <Button
      onClick={toggleMode}
      startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      variant='text'
      color='inherit'
    >
      {t('Toggle mode')}
    </Button>
  );
}
