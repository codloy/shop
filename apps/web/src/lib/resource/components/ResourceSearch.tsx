import { useI18n } from '@/lib/i18n/client';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export type ReourceSearchAbleProps = {
  search: string;
  setSearch(search: string): void;
  localSearch: string;
  setLocalSearch(localSearch: string): void;
};

export type ResourceSearchProps = {
  searchProps?: ReourceSearchAbleProps;
};

export function ResourceSearch(props: ResourceSearchProps) {
  const t = useI18n();
  const { searchProps } = props;

  if (searchProps) {
    const { setSearch, localSearch, setLocalSearch } = searchProps;

    return (
      <Box
        component='form'
        onSubmit={event => {
          event.preventDefault();

          setSearch(localSearch);
        }}
      >
        <TextField
          placeholder={t('Press ENTER to search')}
          onChange={event => setLocalSearch(event.target.value)}
          value={localSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={function () {
                    setSearch('');
                    setLocalSearch('');
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoFocus
          // helperText={t('Press ENTER to search')}
        />
      </Box>
    );
  }

  return <></>;
}
