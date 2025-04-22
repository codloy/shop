'use client';

import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { trpc } from '@/lib/trpc/trpc';
import { Box, Breadcrumbs, Button } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export type AccountSellProductCreateCategoriesBreadcrumbProps = {
  categorySlugs: string[];
  onCategorySlug(categorySlug: string[]): void;
};

export function AccountSellProductCreateCategoriesBreadcrumb(
  props: AccountSellProductCreateCategoriesBreadcrumbProps
) {
  const t = useI18n();
  const { categorySlugs, onCategorySlug } = props;
  const { data, isLoading, isError, error } =
    trpc.homeCategoryBreadcrumbQuery.useQuery({
      categorySlugs,
    });

  function trimSlugsUpToSpecificSlug(
    slugs: string[],
    specificSlug: string
  ): string[] {
    const index = slugs.indexOf(specificSlug);

    if (index === -1) {
      // If the specific slug is not found, return an empty array
      return [];
    }

    // Return a new array with slugs up to and including the specific slug
    return slugs.slice(0, index + 1);
  }

  return (
    <Box>
      {isLoading ? (
        <ResourceLoading />
      ) : isError ? (
        <ResourceError error={error} />
      ) : !data ? (
        <ResourceEmpty />
      ) : (
        <Breadcrumbs separator={<ArrowRightIcon fontSize='small' />}>
          {data.results.map((result, index) => {
            const { id, name } = result;

            const isLastElement = index === data.results.length - 1;

            return (
              <Button
                onClick={() => {
                  const slugs = trimSlugsUpToSpecificSlug(
                    data.results?.map(result => result.slug) || [],
                    result.slug
                  );

                  onCategorySlug(slugs);
                }}
                disabled={isLastElement}
                key={id}
                variant='text'
                color='inherit'
                sx={{ textTransform: 'none' }}
              >
                {id === null ? t('All') : name}
              </Button>
            );
          })}
        </Breadcrumbs>
      )}
    </Box>
  );
}
