import { Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { useI18n } from '@/lib/i18n/client';

export type ResourceInstallAbleProps = {
  onInstall(): void;
};

export type ResourceInstallProps = {
  installProps?: ResourceInstallAbleProps;
};

export function ResourceInstall(props: ResourceInstallProps) {
  const t = useI18n();
  const { installProps } = props;

  if (installProps) {
    const { onInstall } = installProps;

    return (
      <Button
        onClick={onInstall}
        startIcon={<UploadIcon />}
        color='warning'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Install')}
      </Button>
    );
  }

  return <></>;
}
