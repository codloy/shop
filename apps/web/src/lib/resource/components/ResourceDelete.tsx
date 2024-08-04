import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useI18n } from '@/lib/i18n/client';

export type ResourceDeleteAbleProps = {
  onDelete(): void;
  isDisabled: boolean;
};

export type ResourceDeleteProps = {
  deleteProps?: ResourceDeleteAbleProps;
};

export function ResourceDelete(props: ResourceDeleteProps) {
  const t = useI18n();
  const { deleteProps } = props;

  if (deleteProps) {
    const { onDelete, isDisabled } = deleteProps;

    return (
      <Button
        startIcon={<DeleteIcon />}
        disabled={isDisabled}
        onClick={onDelete}
        color='error'
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Delete')}
      </Button>
    );
  }

  return <></>;
}
