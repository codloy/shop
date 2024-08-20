'use client';

import { ProductStatusEnum, productStatuses } from 'common';
import { useI18n } from '@/lib/i18n/client';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { homeFilterSelectedProductStatuses } from 'atoms';
import { homeFiltersCheckboxGap } from '@/consts';

export function HomeFilterProductStatusesForm() {
  const t = useI18n();
  const [selectedProductStatuses, setSelectedProductStatuses] = useAtom(
    homeFilterSelectedProductStatuses
  );

  function onSelect(option: ProductStatusEnum) {
    let clone = structuredClone(selectedProductStatuses);

    const selectedFilter = clone.find(
      selectedProductStatus => selectedProductStatus === option
    );

    if (selectedFilter) {
      clone = clone.filter(
        selectedProductStatus => selectedProductStatus !== option
      );
    } else {
      clone.push(option);
    }

    setSelectedProductStatuses(clone);
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle2'>{t('Product status')}</Typography>

      <FormGroup>
        {productStatuses.map(productStatus => {
          const selectedProductStatus = selectedProductStatuses.find(
            selectedProductStatus => selectedProductStatus === productStatus
          );

          return (
            <FormControlLabel
              key={productStatus}
              control={
                <Checkbox
                  sx={{ py: homeFiltersCheckboxGap }}
                  onChange={() => onSelect(productStatus)}
                  checked={selectedProductStatus ? true : false}
                />
              }
              label={t(productStatus)}
              componentsProps={{
                typography: { variant: 'body2' },
              }}
            />
          );
        })}
      </FormGroup>
    </Stack>
  );
}
