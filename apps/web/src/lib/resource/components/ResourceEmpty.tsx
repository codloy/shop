'use client';

import { Box, Typography } from '@mui/material';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import { useI18n } from '@/lib/i18n/client';

export function ResourceEmpty() {
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
      <NewReleasesOutlinedIcon />
      <Typography sx={{ mt: 1 }} variant='body2'>
        {t('Resource no data')}
      </Typography>
    </Box>
  );
}
