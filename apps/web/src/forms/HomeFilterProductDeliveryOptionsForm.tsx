'use client';

import { ProductDeliveryOptionEnum, productDeliveryOptions } from 'common';
import { useI18n } from '@/lib/i18n/client';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { homeFilterSelectedProductDeliveryOptions } from 'atoms';
import { homeFiltersCheckboxGap } from '@/consts';

export function HomeFilterProductDeliveryOptionsForm() {
  const t = useI18n();
  const [selectedProductDeliveryOptions, setSelectedProductDeliveryOptions] =
    useAtom(homeFilterSelectedProductDeliveryOptions);

  function onSelect(option: ProductDeliveryOptionEnum) {
    let clone = structuredClone(selectedProductDeliveryOptions);

    const selectedFilter = clone.find(
      selectedProductDeliveryOption => selectedProductDeliveryOption === option
    );

    if (selectedFilter) {
      clone = clone.filter(
        selectedProductDeliveryOption =>
          selectedProductDeliveryOption !== option
      );
    } else {
      clone.push(option);
    }

    setSelectedProductDeliveryOptions(clone);
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle2'>
        {t('Product delivery option')}
      </Typography>

      <FormGroup>
        {productDeliveryOptions.map(productDeliveryOption => {
          const selectedProductDeliveryOption =
            selectedProductDeliveryOptions.find(
              selectedProductDeliveryOption =>
                selectedProductDeliveryOption === productDeliveryOption
            );

          return (
            <FormControlLabel
              key={productDeliveryOption}
              control={
                <Checkbox
                  sx={{ py: homeFiltersCheckboxGap }}
                  onChange={() => onSelect(productDeliveryOption)}
                  checked={selectedProductDeliveryOption ? true : false}
                />
              }
              label={t(productDeliveryOption)}
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
