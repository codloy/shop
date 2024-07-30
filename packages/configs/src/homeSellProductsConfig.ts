import { SortDirection } from 'common/src/sortDirections';

export const homeSellProductsDefaultPage = 1;
export const homeSellProductsDefaultTake = 100;
export const homeSellProductsSortableColumns = [
  'id',
  'name',
  'description',
  'publishedAt',
  'createdAt',
  'price',
  'isPriceNegotiable',
  'isFree',
  'type',
  'condition',
  'deliveryOption',
  'availability',
  'status',
] as const;

export type HomeSellProductsSortableColumn =
  (typeof homeSellProductsSortableColumns)[number];

export const homeSellProductsSortColumn: HomeSellProductsSortableColumn =
  'name';
export const homeSellProductsSortDirection: SortDirection = 'asc';
