'use client';

import { useAtom } from 'jotai';
import { trpc } from '@/lib/trpc/trpc';
import { homeFiltersSelectedProductCategoriesAtom } from 'atoms';
import { Fragment } from 'react';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { homeFiltersCheckboxGap } from '@/consts';

export type HomeFilterProductCategoriesFormProps = {
  categorySlugs: string[];
};

export function HomeFilterProductCategoriesForm(
  props: HomeFilterProductCategoriesFormProps
) {
  const { categorySlugs } = props;
  const { isLoading, isError, error, data } =
    trpc.homeFilterProductCategoriesQuery.useQuery({
      slugs: categorySlugs,
    });
  const [selectedFilters, setSelectedFilters] = useAtom(
    homeFiltersSelectedProductCategoriesAtom
  );

  function onSelect(attributeId: string, optionId: string) {
    const clone = structuredClone(selectedFilters);

    const selectedFilter = clone.find(
      selectedFilter => selectedFilter.id === attributeId
    );

    if (selectedFilter) {
      const option = selectedFilter.values.find(value => value === optionId);

      if (option) {
        selectedFilter.values = selectedFilter.values.filter(
          value => value !== optionId
        );
      } else {
        selectedFilter.values.push(optionId);
      }
    } else {
      clone.push({
        id: attributeId,
        values: [optionId],
      });
    }

    setSelectedFilters(clone);
  }

  return (
    <Fragment>
      {isLoading ? (
        <ResourceLoading />
      ) : isError ? (
        <ResourceError error={error} />
      ) : !data ? (
        <ResourceEmpty />
      ) : (
        <Stack spacing={2} sx={{ p: 0 }}>
          {data.results.map(result => {
            const { id, name, options } = result;

            const selectedFilter = selectedFilters.find(
              selectedFilter => selectedFilter.id === id
            );

            return (
              <Stack key={id} spacing={1}>
                <Typography variant='subtitle2'>{name}</Typography>

                <FormGroup>
                  {options.map(option => {
                    const selectedOption = selectedFilter?.values.find(
                      value => value === option.id
                    );

                    return (
                      <FormControlLabel
                        key={option.id}
                        control={
                          <Checkbox
                            sx={{ py: homeFiltersCheckboxGap }}
                            onChange={() => onSelect(id, option.id)}
                            checked={selectedOption ? true : false}
                          />
                        }
                        label={option.value}
                        componentsProps={{
                          typography: { variant: 'body2' },
                        }}
                      />
                    );
                  })}
                </FormGroup>
              </Stack>
            );
          })}
        </Stack>
      )}
    </Fragment>
  );
}
