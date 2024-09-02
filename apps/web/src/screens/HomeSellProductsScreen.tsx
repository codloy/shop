'use client';

import React from 'react';
import { HomeFrame } from '@/frames';
import { HomeCategoriesBreadcrumb } from '@/breadcrumbs';
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

export function HomeSellProductsScreen() {
  const homeSellProductConfig = useHomeSellProductConfig();

  return (
    <HomeFrame>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HomeCategoriesBreadcrumb />
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={0}
          sm={0}
          xs={0}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <HomeCategoriesList />
        </Grid>
        <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
          <HomeSellProductsGrid
            source='manage'
            selectMultiple={false}
            {...homeSellProductConfig}
          />
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={0}
          xs={0}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Stack spacing={2}>
            <HomeFilterProductAvailabilitiesForm />
            <HomeFilterProductConditionsForm />
            <HomeFilterProductDeliveryOptionsForm />
            <HomeFilterProductStatusesForm />
            <HomeFilterProductTypesForm />
            <HomeFilterProductCategoriesForm />
          </Stack>
        </Grid>
      </Grid>
    </HomeFrame>
  );
}
