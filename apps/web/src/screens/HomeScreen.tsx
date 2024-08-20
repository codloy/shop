'use client';

import { HomeCategoriesBreadcrumb } from '@/components';
import {
  HomeFilterProductAvailabilitiesForm,
  HomeFilterProductConditionsForm,
  HomeFilterProductDeliveryOptionsForm,
  HomeFilterProductStatusesForm,
  HomeFilterProductTypesForm,
  HomeFilterProductCategoriesForm,
} from '@/forms';
import { HomeFrame } from '@/frames';
import { HomeCategoriesList } from '@/lists';
import { Grid, Stack } from '@mui/material';

export function HomeScreen() {
  const categorySlugs: string[] = [];

  return (
    <HomeFrame>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HomeCategoriesBreadcrumb categorySlugs={categorySlugs} />
        </Grid>
        <Grid item xl={2}>
          <HomeCategoriesList categorySlugs={categorySlugs} />
        </Grid>
        <Grid item xl={8}>
          asd
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
