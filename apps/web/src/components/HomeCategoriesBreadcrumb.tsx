'use client';

import { trpc } from '@/lib/trpc/trpc';
import { Box, Breadcrumbs, Button, IconButton } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import CottageIcon from '@mui/icons-material/Cottage';

export type HomeCategoriesBreadcrumbProps = {
  categorySlugs: string[];
};

export function HomeCategoriesBreadcrumb(props: HomeCategoriesBreadcrumbProps) {
  const t = useI18n();
  const { categorySlugs } = props;
  const { data } = trpc.homeCategoryBreadcrumbQuery.useQuery({
    categorySlugs,
  });

  return (
    <Box sx={{ pt: 2, px: 1 }}>
      <Breadcrumbs separator={<ArrowRightIcon fontSize='small' />}>
        <IconButton LinkComponent={Link} href='/'>
          <CottageIcon />
        </IconButton>
        {data?.results.map((result, index) => {
          const { id, name } = result;

          const isLastElement = index === data?.results.length - 1;

          return (
            <Button
              disabled={isLastElement}
              key={id}
              LinkComponent={Link}
              href={`/categories/${result.href}`}
              variant='text'
              color='inherit'
              sx={{ textTransform: 'none' }}
            >
              {id === null ? t('All') : name}
            </Button>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
