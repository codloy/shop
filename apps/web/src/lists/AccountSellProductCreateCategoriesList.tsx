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
import { NestedCategory } from './HomeCategoriesList';

type TestProps = {
  categories: NestedCategory[];
  depth: number;
  categorySlugs: string[];
  onCategorySlugs(categorySlugs: string[]): void;
  fullResults: NestedCategory[];
};

export type AccountProductSellCreateSelectCategoryProps = {
  categorySlugs: string[];
  onCategorySlugs(categorySlugs: string[]): void;
};

export function AccountProductSellCreateSelectCategory(
  props: AccountProductSellCreateSelectCategoryProps
) {
  const { categorySlugs, onCategorySlugs } = props;
  const { isError, error, data } = trpc.homeCategoryNested.useQuery({
    slugs: categorySlugs,
  });

  return (
    <List disablePadding>
      {isError ? (
        <ResourceError error={error} />
      ) : (
        <Fragment>
          <Test
            categorySlugs={categorySlugs}
            categories={data?.results || []}
            depth={1}
            onCategorySlugs={onCategorySlugs}
            fullResults={data?.results || []}
          />
        </Fragment>
      )}
    </List>
  );
}

function Test(props: TestProps) {
  const { categories, depth, categorySlugs, onCategorySlugs, fullResults } =
    props;
  console.log({ categorySlugs });

  function findCategoryPathBySlug(
    categories: NestedCategory[],
    slug: string
  ): string[] {
    for (let category of categories) {
      // Include the current category's slug in the path
      const currentPath = [category.slug];

      if (category.slug === slug) {
        // If the current category's slug matches, return the path
        return currentPath;
      } else if (category.categories.length > 0) {
        // Recursively search in subcategories
        const result = findCategoryPathBySlug(category.categories, slug);
        if (result.length > 0) {
          // If the category is found in the subcategories, prepend the current category's slug
          return [category.slug, ...result];
        }
      }
    }
    // If the category is not found, return an empty array
    return [];
  }

  return (
    <List disablePadding>
      {categories.map(category => (
        <Fragment key={category.id}>
          <ListItem
            disablePadding
            sx={{ my: 0, borderRadius: 0 }}
            // selected={parentId === category.id}
          >
            <ListItemButton
              onClick={() => {
                const slugs = findCategoryPathBySlug(
                  fullResults,
                  category.slug
                );

                console.log(slugs);

                onCategorySlugs(slugs);
              }}
              sx={{ borderRadius: 0, p: 0.4, pl: `${depth * 6}px` }}
              // disabled={categorySlugs.includes(category.slug)}
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
              onCategorySlugs={onCategorySlugs}
              fullResults={fullResults}
            />
          )}
        </Fragment>
      ))}
    </List>
  );
}
