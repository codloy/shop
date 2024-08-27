'use client';

import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { trpc } from '@/lib/trpc/trpc';
import { Box, Breadcrumbs, Button } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';

export type HomeSellProductBreadcrumbProps = {
  productSlug: string;
};

export function HomeSellProductBreadcrumb(
  props: HomeSellProductBreadcrumbProps
) {
  const t = useI18n();
  const { productSlug } = props;
  const { data, isLoading, isError, error } =
    trpc.homeSellProductBreadcrumbQuery.useQuery({
      productSlug,
    });

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
                component={Link}
                href={`/categories/${result.href}`}
                key={id}
                variant='text'
                disabled={isLastElement}
                sx={{ textTransform: 'none' }}
                color='inherit'
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
