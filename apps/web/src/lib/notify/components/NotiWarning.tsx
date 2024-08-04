import { forwardRef, useCallback } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { Alert } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

interface NotiWarningProps extends CustomContentProps {}

export const NotiWarning = forwardRef<HTMLDivElement, NotiWarningProps>(
  ({ id, message }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref}>
        <Alert
          severity='warning'
          icon={<WarningAmberOutlinedIcon />}
          onClose={() => handleDismiss()}
        >
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

NotiWarning.displayName = 'NotiWarning';
