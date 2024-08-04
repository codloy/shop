import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useI18n } from '@/lib/i18n/client';

export type ResourceCreateAbleProps = {
  onCreate(): void;
};

export type ResourceCreateProps = {
  createProps?: ResourceCreateAbleProps;
};

export function ResourceCreate(props: ResourceCreateProps) {
  const t = useI18n();
  const { createProps } = props;

  if (createProps) {
    const { onCreate } = createProps;

    return (
      <Button
        onClick={onCreate}
        startIcon={<AddIcon />}
        color='success'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Create')}
      </Button>
    );
  }

  return <></>;
}
