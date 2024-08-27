import { ResourceProps } from '@/lib/resource/types/ResourceProps';
import { trpc } from '@/lib/trpc/trpc';
import { Grid } from '@mui/material';
import { HomeSellProductsSortableColumn } from 'configs';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import { HomeProductSellCard } from '@/cards';

export type HomeSellProductsGridProps =
  ResourceProps<HomeSellProductsSortableColumn> & {
    categorySlugs: string[];
  };

export function HomeSellProductsGrid(props: HomeSellProductsGridProps) {
  const {
    // source,
    // selectedIds,
    // setSelectedIds,
    // selectMultiple,
    // onSelectedIds,
    take,
    // setTake,
    page,
    // setPage,
    search,
    // setSearch,
    // localSearch,
    // setLocalSearch,
    sortColumn,
    // setSortColumn,
    sortDirection,
    // setSortDirection,
    categorySlugs,
  } = props;
  const { data, isLoading, isError, error } =
    trpc.homeSellProductsQuery.useQuery({
      take,
      page,
      search,
      sortColumn,
      sortDirection,
      categorySlugs,
    });

  if (isLoading) {
    return <ResourceLoading />;
  }

  if (isError) {
    return <ResourceError error={error} />;
  }

  if (!data || !data.results.length) {
    return <ResourceEmpty />;
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }} columns={12}>
      {data.results.map(result => (
        <Grid item xl={4} lg={4} md={3} sm={4} xs={6} key={result.product.id}>
          <HomeProductSellCard
            product={result.product}
            images={result.images}
            category={result.category}
          />
        </Grid>
      ))}
    </Grid>
  );
}
