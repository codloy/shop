import { forwardRef, useCallback } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { Alert } from '@mui/material';

interface NotiDefaultProps extends CustomContentProps {}

export const NotiDefault = forwardRef<HTMLDivElement, NotiDefaultProps>(
  ({ id, message }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref}>
        <Alert severity='success' icon={false} onClose={() => handleDismiss()}>
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

NotiDefault.displayName = 'NotiDefault';
