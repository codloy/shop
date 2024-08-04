import { Box, Stack, Typography } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import { SvgIconComponent } from '@mui/icons-material';

export type ResourceHeaderProps = {
  icon: SvgIconComponent;
  title: string;
  total?: number;
  found?: number;
};

export function ResourceHeader(props: ResourceHeaderProps) {
  const t = useI18n();
  const { icon: Icon, title, total, found } = props;

  return (
    <Stack sx={{ my: 4, mx: 2 }} spacing={1}>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <Icon color='primary' />
        <Typography color='primary.main' variant='h6'>
          {title}
        </Typography>
      </Stack>
      <Box>
        {total !== undefined && (
          <Typography variant='body2'>
            {t('Showing total of {total} data', { total })}
          </Typography>
        )}
        {found !== undefined && (
          <Typography variant='body2'>
            {t('Showing found of {found} data', { found })}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
