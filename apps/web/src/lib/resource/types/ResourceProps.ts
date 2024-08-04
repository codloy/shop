import { SortDirection } from '../sort/sortDirections';
import { ResourceType } from './ResourceType';

export type ResourceProps<T> = {
  source: ResourceType;
  selectedIds: string[];
  setSelectedIds(rows: string[]): void;
  onSelectedIds?(ids: string[]): void;
  selectMultiple: boolean;
  page: number;
  setPage(page: number): void;
  take: number;
  setTake(take: number): void;
  search: string;
  setSearch(search: string): void;
  localSearch: string;
  setLocalSearch(localSearch: string): void;
  sortColumn: T;
  setSortColumn(sortColumn: T): void;
  sortDirection: SortDirection;
  setSortDirection(sortDirection: SortDirection): void;
};
