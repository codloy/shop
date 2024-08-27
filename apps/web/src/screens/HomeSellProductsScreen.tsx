'use client';

import React from 'react';
import { HomeFrame } from '@/frames';
import { HomeCategoriesBreadcrumb } from '@/components';
import { useHomeSellProductConfig } from '@/hooks';
import { HomeSellProductsGrid } from '@/grids';
import { Grid, Stack } from '@mui/material';
import { HomeCategoriesList } from '@/lists';
import {
  HomeFilterProductAvailabilitiesForm,
  HomeFilterProductCategoriesForm,
  HomeFilterProductConditionsForm,
  HomeFilterProductDeliveryOptionsForm,
  HomeFilterProductStatusesForm,
  HomeFilterProductTypesForm,
} from '@/forms';

export type HomeSellProductsScreenProps = {
  categorySlugs?: string[];
};

export function HomeSellProductsScreen(props: HomeSellProductsScreenProps) {
  const { categorySlugs = [] } = props;
  const homeSellProductConfig = useHomeSellProductConfig();

  return (
    <HomeFrame categorySlugs={categorySlugs} productType='Sell'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HomeCategoriesBreadcrumb categorySlugs={categorySlugs} />
        </Grid>
        <Grid item xl={2}>
          <HomeCategoriesList
            productType='Sell'
            categorySlugs={categorySlugs}
          />
        </Grid>
        <Grid item xl={8}>
          <HomeSellProductsGrid
            source='manage'
            categorySlugs={categorySlugs || []}
            selectMultiple={false}
            {...homeSellProductConfig}
          />
        </Grid>
        <Grid item xl={2}>
          <Stack spacing={2}>
            <HomeFilterProductAvailabilitiesForm />
            <HomeFilterProductConditionsForm />
            <HomeFilterProductDeliveryOptionsForm />
            <HomeFilterProductStatusesForm />
            <HomeFilterProductTypesForm />
            <HomeFilterProductCategoriesForm categorySlugs={categorySlugs} />
          </Stack>
        </Grid>
      </Grid>
    </HomeFrame>
  );
}
