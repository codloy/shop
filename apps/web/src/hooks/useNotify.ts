import { SnackbarKey, useSnackbar } from 'notistack';
import { useState } from 'react';

export function useNotify() {
  const [id, setId] = useState<SnackbarKey | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    id,
    setId,
    notify: enqueueSnackbar,
    close: () => {
      if (!id) return;

      closeSnackbar(id);
      setId(null);
    },
    success: (message: string) =>
      enqueueSnackbar(message, { variant: 'success' }),
    error: (message: string) => enqueueSnackbar(message, { variant: 'error' }),
    info: (message: string) => enqueueSnackbar(message, { variant: 'info' }),
    loading: (message: string) =>
      enqueueSnackbar(message, { variant: 'loading' }),
  } as const;
}
