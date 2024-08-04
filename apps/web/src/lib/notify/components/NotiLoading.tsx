import { forwardRef } from 'react';
import { SnackbarContent, CustomContentProps } from 'notistack';
import { Alert } from '@mui/material';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
// import { useI18n } from '@/lib/i18n/client';

interface NotiLoadingProps extends CustomContentProps {}

export const NotiLoading = forwardRef<HTMLDivElement, NotiLoadingProps>(
  ({ message }, ref) => {
    // const t = useI18n();

    return (
      <SnackbarContent ref={ref}>
        <Alert severity='info' icon={<HourglassBottomOutlinedIcon />}>
          {/* <AlertTitle>{t('Please wait')}</AlertTitle> */}
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

NotiLoading.displayName = 'NotiLoading';
