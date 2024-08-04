import { forwardRef, useCallback } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { Alert } from '@mui/material';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

interface NotiErrorProps extends CustomContentProps {}

export const NotiError = forwardRef<HTMLDivElement, NotiErrorProps>(
  ({ id, message }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref}>
        <Alert
          severity='error'
          icon={<ReportGmailerrorredOutlinedIcon />}
          onClose={() => handleDismiss()}
        >
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

NotiError.displayName = 'NotiError';
