import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ClearIcon from '@mui/icons-material/Clear';

export type ResourceConnectProps = {
  label: string;
  onConnect(): void;
  value?: string;
  onClear(): void;
  error?: boolean;
  helperText?: string;
};

export function ResourceConnect(props: ResourceConnectProps) {
  const { label, onConnect, value = '', onClear, error, helperText } = props;

  return (
    <FormControl fullWidth size='small' variant='outlined'>
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
        error={error}
        id='outlined-adornment-password'
        type={'text'}
        value={value}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={onConnect}
              edge='end'
            >
              <OpenInNewIcon />
            </IconButton>
            {!!value && (
              <IconButton
                aria-label='toggle password visibility'
                onClick={onClear}
                edge='end'
                sx={{ pl: 1 }}
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
        label={label}
        readOnly
      />
      {helperText && (
        <FormHelperText id='outlined-weight-helper-text' error={error}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}
