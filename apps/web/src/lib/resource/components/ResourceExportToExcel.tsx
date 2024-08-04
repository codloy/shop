import { Button } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import DownloadIcon from '@mui/icons-material/Download';

export type ResourceExportToExcelAbleProps = {
  onExportToExcel(): void;
};

export type ResourceExportToExcelProps = {
  exportToExcelProps?: ResourceExportToExcelAbleProps;
};

export function ResourceExportToExcel(props: ResourceExportToExcelProps) {
  const t = useI18n();
  const { exportToExcelProps } = props;

  if (exportToExcelProps) {
    const { onExportToExcel } = exportToExcelProps;

    return (
      <Button
        onClick={onExportToExcel}
        startIcon={<DownloadIcon />}
        color='inherit'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Export to excel')}
      </Button>
    );
  }

  return <></>;
}
