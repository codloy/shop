'use client';

import { ProductAvailabilityEnum, productAvailabilities } from 'common';
import { useI18n } from '@/lib/i18n/client';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { homeFilterSelectedProductAvailabilitiesAtom } from 'atoms';
import { homeFiltersCheckboxGap } from '@/consts';

export function HomeFilterProductAvailabilitiesForm() {
  const t = useI18n();
  const [selectedProductAvailabilities, setSelectedProductAvailabilities] =
    useAtom(homeFilterSelectedProductAvailabilitiesAtom);

  function onSelect(option: ProductAvailabilityEnum) {
    let clone = structuredClone(selectedProductAvailabilities);

    const selectedFilter = clone.find(
      selectedProductAvailability => selectedProductAvailability === option
    );

    if (selectedFilter) {
      clone = clone.filter(
        selectedProductAvailability => selectedProductAvailability !== option
      );
    } else {
      clone.push(option);
    }

    setSelectedProductAvailabilities(clone);
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle2'>{t('Product availability')}</Typography>

      <FormGroup>
        {productAvailabilities.map(productAvailability => {
          const selectedProductAvailability =
            selectedProductAvailabilities.find(
              selectedProductAvailability =>
                selectedProductAvailability === productAvailability
            );

          return (
            <FormControlLabel
              key={productAvailability}
              control={
                <Checkbox
                  sx={{ py: homeFiltersCheckboxGap }}
                  onChange={() => onSelect(productAvailability)}
                  checked={selectedProductAvailability ? true : false}
                />
              }
              label={t(productAvailability)}
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
