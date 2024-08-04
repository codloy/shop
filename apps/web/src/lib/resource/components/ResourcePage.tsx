import { Button, ButtonGroup } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type ResourcePageAbleProps = {
  page: number;
  setPage(page: number): void;
  total?: number;
  found?: number;
};

export type ResourcePageProps = {
  pageProps?: ResourcePageAbleProps;
};

export function ResourcePage(props: ResourcePageProps) {
  const { pageProps } = props;

  if (pageProps) {
    const { page, setPage, total = 0, found = 0 } = pageProps;

    return (
      <ButtonGroup
        size='small'
        variant='contained'
        aria-label='Basic button group'
        // sx={{ display: { md: 'inline-flex' } }}
        color='primary'
      >
        <Button
          onClick={() => setPage(page - 1)}
          sx={{ px: 0, mx: 0, minWidth: 27 }}
        >
          <ChevronLeftIcon fontSize='small' />
        </Button>
        <Button
          sx={{ px: 0, mx: 0, minWidth: 27 }}
        >{`${page} | ${total}-${found}`}</Button>
        <Button
          onClick={() => setPage(page + 1)}
          sx={{ px: 0, mx: 0, minWidth: 27 }}
        >
          <ChevronRightIcon fontSize='small' />
        </Button>
      </ButtonGroup>
    );
  }

  return <></>;
}
