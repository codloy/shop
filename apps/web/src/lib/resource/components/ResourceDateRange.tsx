import { useI18n } from '@/lib/i18n/client';
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dateRangeOptions } from '../../dateRange/dateRangeOptions';
import { generateDateRangeOption } from '../../dateRange/generateDateRangeOption';

export type ResourceDateRangeAbleProps = {
  startDate: string;
  onStartDate(startDate: string): void;
  endDate: string;
  onEndDate(endDate: string): void;
};

export type ResourceDateRangeProps = {
  dateRangeProps?: ResourceDateRangeAbleProps;
};

export function ResourceDateRange(props: ResourceDateRangeProps) {
  const t = useI18n();
  const { dateRangeProps } = props;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function onClose() {
    setAnchorEl(null);
  }

  if (dateRangeProps) {
    const { startDate, onStartDate, endDate, onEndDate } = dateRangeProps;

    return (
      <Stack direction={xs ? 'column' : 'row'} spacing={1}>
        <TextField
          type='datetime-local'
          value={startDate}
          onChange={event => onStartDate(event.target.value)}
          fullWidth={false}
          label={t('Start date')}
        />
        <TextField
          type='datetime-local'
          value={endDate}
          onChange={event => onEndDate(event.target.value)}
          fullWidth={false}
          label={t('End date')}
        />
        <div>
          <IconButton
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {dateRangeOptions.map((option, i) => (
              <MenuItem
                key={i}
                onClick={() => {
                  const { startDate, endDate } =
                    generateDateRangeOption(option);

                  onStartDate(startDate);
                  onEndDate(endDate);

                  onClose();
                }}
              >
                {t(option)}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Stack>
    );
  }

  return <></>;
}
