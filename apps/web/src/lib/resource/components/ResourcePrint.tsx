import { Button } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import PrintIcon from '@mui/icons-material/Print';

export type ResourcePrintAbleProps = {
  onPrint(): void;
};

export type ResourcePrintProps = {
  printProps?: ResourcePrintAbleProps;
};

export function ResourcePrint(props: ResourcePrintProps) {
  const t = useI18n();
  const { printProps } = props;

  if (printProps) {
    const { onPrint } = printProps;

    return (
      <Button
        onClick={onPrint}
        startIcon={<PrintIcon />}
        color='inherit'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
        variant='text'
      >
        {t('Print')}
      </Button>
    );
  }

  return <></>;
}
