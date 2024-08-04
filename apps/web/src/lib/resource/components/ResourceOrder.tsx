import { SortDirection, TableSortLabel } from '@mui/material';
import { PropsWithChildren } from 'react';

export type ResourceOrderProps<SortColumn> = PropsWithChildren<{
  column: SortColumn;
  sortColumn: SortColumn;
  setSortColumn(sortColumn: SortColumn): void;
  sortDirection: SortDirection;
  setSortDirection(sortDirection: SortDirection): void;
}>;

export function ResourceOrder<SortColumn>(
  props: ResourceOrderProps<SortColumn>
) {
  const {
    children,
    column,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
  } = props;

  function onOrderBy() {
    setSortColumn(column);

    if (sortColumn !== column) {
      return setSortDirection('asc');
    }

    if (sortColumn === column && sortDirection === 'asc') {
      return setSortDirection('desc');
    }

    if (sortColumn === column && sortDirection === 'desc') {
      return setSortDirection('asc');
    }
  }

  return (
    <TableSortLabel
      onClick={onOrderBy}
      active={sortColumn === 'lastName'}
      direction={sortDirection === 'asc' ? 'asc' : 'desc'}
    >
      {children}
    </TableSortLabel>
  );
}
