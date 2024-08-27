import {
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
  useQueryState,
} from 'next-usequerystate';
import {
  homeSellProductsDefaultPage,
  homeSellProductsDefaultTake,
  homeSellProductsSortColumn,
  homeSellProductsSortDirection,
  homeSellProductsSortableColumns,
} from 'configs';
import { sortDirections } from '@/lib/resource/sort/sortDirections';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { homeSellProductsScreenSelectedIdsAtom } from 'atoms';

export function useHomeSellProductConfig() {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(homeSellProductsDefaultPage)
  );
  const [take, setTake] = useQueryState(
    'take',
    parseAsInteger.withDefault(homeSellProductsDefaultTake)
  );
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('')
  );
  const [localSearch, setLocalSearch] = useState(search);
  const [sortColumn, setSortColumn] = useQueryState(
    'sortColumn',
    parseAsStringEnum([...homeSellProductsSortableColumns]).withDefault(
      homeSellProductsSortColumn
    )
  );
  const [sortDirection, setSortDirection] = useQueryState(
    'sortDirection',
    parseAsStringEnum([...sortDirections]).withDefault(
      homeSellProductsSortDirection
    )
  );
  const [selectedIds, setSelectedIds] = useAtom(
    homeSellProductsScreenSelectedIdsAtom
  );

  return {
    page,
    setPage,
    take,
    setTake,
    search,
    setSearch,
    localSearch,
    setLocalSearch,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    selectedIds,
    setSelectedIds,
  };
}
