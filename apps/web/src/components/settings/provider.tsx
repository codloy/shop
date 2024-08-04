'use client';

import { useEffect } from 'react';
import { SettingsDialog } from './dialog';
import { useAtom } from 'jotai';
import { settingsDialogAtom } from './atom';

export function SettingsProvider() {
  const [dialog, setDialog] = useAtom(settingsDialogAtom);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === '/') {
      setDialog({
        open: true,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  });

  return <>{dialog.open && <SettingsDialog />}</>;
}
