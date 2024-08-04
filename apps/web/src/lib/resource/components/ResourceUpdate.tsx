import { useI18n } from '@/lib/i18n/client';
import { Button } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';

export type ResourceUpdateAbleProps = {
  onUpdate(): void;
  isDisabled: boolean;
};

export type ResourceUpdateProps = {
  updateProps?: ResourceUpdateAbleProps;
};

export function ResourceUpdate(props: ResourceUpdateProps) {
  const t = useI18n();
  const { updateProps } = props;

  if (updateProps) {
    const { onUpdate, isDisabled } = updateProps;

    return (
      <Button
        startIcon={<BrushIcon />}
        disabled={isDisabled}
        onClick={onUpdate}
        color='info'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Update')}
      </Button>
    );
  }

  return <></>;
}
