import { forwardRef, useCallback } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { Alert } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface NotiInfoProps extends CustomContentProps {}

export const NotiInfo = forwardRef<HTMLDivElement, NotiInfoProps>(
  ({ id, message }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref}>
        <Alert
          severity='info'
          icon={<InfoOutlinedIcon />}
          onClose={() => handleDismiss()}
        >
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

NotiInfo.displayName = 'NotiInfo';
