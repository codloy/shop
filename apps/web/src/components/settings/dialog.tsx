import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useColorScheme,
} from '@mui/material';
import { useAtom } from 'jotai';
import { settingsDialogAtom } from './atom';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/lib/i18n/client';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export function SettingsDialog() {
  const t = useI18n();
  const [dialog, setDialog] = useAtom(settingsDialogAtom);
  const { mode, setMode } = useColorScheme();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  function toggleLocale() {
    changeLocale(currentLocale === 'en' ? 'mn' : 'en');
  }

  function onClose() {
    setDialog({
      open: false,
    });
  }

  function onChangeMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <Dialog open={dialog.open} onClose={onClose}>
      <DialogTitle>
        <Typography variant='button'>{t('Комманд ажиллуулах')}</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Button
            onClick={onChangeMode}
            startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            variant='text'
            color='inherit'
          >
            {t('Toggle mode')}
          </Button>
          <Button
            onClick={toggleLocale}
            startIcon={<LanguageIcon />}
            variant='text'
            color='inherit'
          >
            {t('Toggle locale')}
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='text' startIcon={<CloseIcon />}>
          {t('Цонх хаах')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
