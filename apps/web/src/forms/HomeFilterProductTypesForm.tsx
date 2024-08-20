'use client';

import { ProductTypeEnum, productTypes } from 'common';
import { useI18n } from '@/lib/i18n/client';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { homeFilterSelectedProductTypes } from 'atoms';
import { homeFiltersCheckboxGap } from '@/consts';

export function HomeFilterProductTypesForm() {
  const t = useI18n();
  const [selectedProductTypes, setSelectedProductTypes] = useAtom(
    homeFilterSelectedProductTypes
  );

  function onSelect(option: ProductTypeEnum) {
    let clone = structuredClone(selectedProductTypes);

    const selectedFilter = clone.find(
      selectedProductType => selectedProductType === option
    );

    if (selectedFilter) {
      clone = clone.filter(
        selectedProductType => selectedProductType !== option
      );
    } else {
      clone.push(option);
    }

    setSelectedProductTypes(clone);
  }

  return (
    <Stack spacing={1}>
      <Typography variant='subtitle2'>{t('Product type')}</Typography>

      <FormGroup>
        {productTypes.map(productType => {
          const selectedProductType = selectedProductTypes.find(
            selectedProductType => selectedProductType === productType
          );

          return (
            <FormControlLabel
              key={productType}
              control={
                <Checkbox
                  sx={{ py: homeFiltersCheckboxGap }}
                  onChange={() => onSelect(productType)}
                  checked={selectedProductType ? true : false}
                />
              }
              label={t(productType)}
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
