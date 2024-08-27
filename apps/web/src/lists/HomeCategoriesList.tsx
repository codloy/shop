'use client';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { trpc } from '@/lib/trpc/trpc';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { Fragment } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useI18n } from '@/lib/i18n/client';
import { showAllCategoryOption } from '@/consts';
import Link from 'next/link';

export type NestedCategory = {
  id: string;
  name: string;
  slug: string;
  href: string;
  isSelected: boolean;
  categories: NestedCategory[];
};

export type TestProps = {
  categories: NestedCategory[];
  depth: number;
  categorySlugs: string[];
  productType: ProductTypeEnum;
};

export type HomeCategoriesListProps = {
  categorySlugs: string[];
  productType: ProductTypeEnum;
};

export function HomeCategoriesList(props: HomeCategoriesListProps) {
  const { categorySlugs, productType } = props;
  const { isError, error, data } = trpc.homeCategoryNestedQuery.useQuery({
    slugs: categorySlugs,
  });

  return (
    <List>
      {isError ? (
        <ResourceError error={error} />
      ) : (
        <Fragment>
          <Test
            categorySlugs={categorySlugs}
            categories={data?.results || []}
            depth={1}
            productType={productType}
          />
        </Fragment>
      )}
    </List>
  );
}

function Test(props: TestProps) {
  const t = useI18n();
  const { categories, depth, categorySlugs, productType } = props;

  return (
    <List disablePadding>
      {depth === 1 && showAllCategoryOption && (
        <ListItem
          disablePadding
          sx={{ my: 0, borderRadius: 0 }}
          selected={categorySlugs.length === 0}
        >
          <ListItemButton
            LinkComponent={Link}
            href={`/categories`}
            sx={{ borderRadius: 0, p: 0.4, pl: `6px` }}
            // disabled={parentId === null}
          >
            <ListItemIcon sx={{ minWidth: '22px' }}>
              {/* {parentId === null ? (
                <ArrowDropDownIcon color='primary' />
              ) : (
                <ArrowRightIcon />
              )} */}
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant='body2'
                // color={parentId === null ? 'primary.main' : undefined}
              >
                {t('All')}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      )}
      {categories.map(category => (
        <Fragment key={category.id}>
          <ListItem
            disablePadding
            sx={{ my: 0, borderRadius: 0 }}
            // selected={parentId === category.id}
          >
            <ListItemButton
              LinkComponent={Link}
              href={`/categories/${productType.toLowerCase()}/${category.href}`}
              sx={{ borderRadius: 0, p: 0.4, pl: `${depth * 6}px` }}
              disabled={categorySlugs.includes(category.slug)}
            >
              <ListItemIcon sx={{ minWidth: '22px' }}>
                {categorySlugs.includes(category.slug) ? (
                  <ArrowDropDownIcon color='primary' />
                ) : (
                  <ArrowRightIcon />
                )}
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant='body2'
                  color={category.isSelected ? 'primary.main' : undefined}
                >
                  {category.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {category.categories.length > 0 && (
            <Test
              categorySlugs={categorySlugs}
              categories={category.categories}
              depth={depth + 1}
              productType={productType}
            />
          )}
        </Fragment>
      ))}
    </List>
  );
}
