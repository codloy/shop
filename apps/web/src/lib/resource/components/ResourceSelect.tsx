import DoneIcon from '@mui/icons-material/Done';
import { useI18n } from '@/lib/i18n/client';
import { Button } from '@mui/material';

export type ResourceSelectAbleProps = {
  selectedIds: string[];
  onSelectedIds?(ids: string[]): void;
  setSelectedIds(ids: string[]): void;
};

export type ResourceSelectProps = {
  selectProps?: ResourceSelectAbleProps;
};

export function ResourceSelect(props: ResourceSelectProps) {
  const t = useI18n();
  const { selectProps } = props;

  if (selectProps) {
    const { selectedIds, setSelectedIds, onSelectedIds } = selectProps;

    return (
      <Button
        onClick={function () {
          onSelectedIds?.(selectedIds);
          setSelectedIds([]);
        }}
        startIcon={<DoneIcon />}
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Select')}
      </Button>
    );
  }

  return <></>;
}
