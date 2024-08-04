import { useSnackbar } from 'notistack';

export function useNoti() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return { noti: enqueueSnackbar, closeNoti: closeSnackbar };
}
