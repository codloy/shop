'use client';

import { ProductConditionEnum, productConditions } from 'common';
import { useI18n } from '@/lib/i18n/client';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { homeFilterSelectedProductConditions } from 'atoms';
import { homeFiltersCheckboxGap } from '@/consts';

export function HomeFilterProductConditionsForm() {
  const t = useI18n();
  const [selectedProductConditions, setSelectedProductConditions] = useAtom(
    homeFilterSelectedProductConditions
  );

  function onSelect(option: ProductConditionEnum) {
    let clone = structuredClone(selectedProductConditions);

    const selectedFilter = clone.find(
      selectedProductCondition => selectedProductCondition === option
    );

    if (selectedFilter) {
      clone = clone.filter(
        selectedProductCondition => selectedProductCondition !== option
      );
    } else {
      clone.push(option);
    }

    setSelectedProductConditions(clone);
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle2'>{t('Product condition')}</Typography>

      <FormGroup>
        {productConditions.map(productCondition => {
          const selectedProductCondition = selectedProductConditions.find(
            selectedProductCondition =>
              selectedProductCondition === productCondition
          );

          return (
            <FormControlLabel
              key={productCondition}
              control={
                <Checkbox
                  sx={{ py: homeFiltersCheckboxGap }}
                  onChange={() => onSelect(productCondition)}
                  checked={selectedProductCondition ? true : false}
                />
              }
              label={t(productCondition)}
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
