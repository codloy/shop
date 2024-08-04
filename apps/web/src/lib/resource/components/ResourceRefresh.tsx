import { LoadingButton } from '@mui/lab';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useI18n } from '@/lib/i18n/client';

export type ResourceRefreshAbleProps = {
  onRefresh(): void;
  isLoading: boolean;
  isFetching: boolean;
};

export type ResourceRefreshProps = {
  refreshProps?: ResourceRefreshAbleProps;
};

export function ResourceRefresh(props: ResourceRefreshProps) {
  const t = useI18n();
  const { refreshProps } = props;

  if (refreshProps) {
    const { onRefresh, isLoading, isFetching } = refreshProps;

    return (
      <LoadingButton
        onClick={onRefresh}
        loading={isLoading || isFetching}
        startIcon={<RefreshIcon />}
        sx={{ display: { xs: 'none', sm: 'none', md: 'inline-flex' } }}
      >
        {t('Refresh')}
      </LoadingButton>
    );
  }

  return <></>;
}
