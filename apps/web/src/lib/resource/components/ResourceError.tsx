'use client';
import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useI18n } from '@/lib/i18n/client';

export type ResourceErrorProps = {
  error: any;
  message?: string;
};

export function ResourceError(props: ResourceErrorProps) {
  const { error, message } = props;
  const t = useI18n();

  return (
    <Box
      sx={{
        width: '100%',
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ErrorIcon color='error' />
      <Typography sx={{ mt: 1 }} gutterBottom color='error.main'>
        {t('Resource error')}
      </Typography>
      <Typography variant='body2' color='error.main'>
        {message ? message : t(error.message, {})}
      </Typography>
    </Box>
  );
}
