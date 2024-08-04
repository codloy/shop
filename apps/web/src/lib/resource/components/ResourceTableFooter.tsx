import { useI18n } from '@/lib/i18n/client';
import {
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from '@mui/material';

export type ResourceTableFooterAbleProps = {
  selectedIds: string[];
  found: number;
  page: number;
  onPage(page: number): void;
  take: number;
  onTake(take: number): void;
};

export type ResourceTableFooterProps = {
  footerProps?: ResourceTableFooterAbleProps;
};

export function ResourceTableFooter(props: ResourceTableFooterProps) {
  const t = useI18n();
  const { footerProps } = props;

  if (footerProps) {
    const { selectedIds, found, page, onPage, onTake, take } = footerProps;

    return (
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            {t('Selected {number} items', {
              number: selectedIds.length,
            })}
          </TableCell>
          <TablePagination
            count={Number(found || 0)}
            page={page - 1}
            onPageChange={(_event, page) => onPage(page)}
            rowsPerPage={take}
            onRowsPerPageChange={event => {
              onTake(parseInt(event.target.value, 10));
              onPage(1);
            }}
            // colSpan={3}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}–${to} / ${count}`
            }
            labelRowsPerPage=''
          />
        </TableRow>
      </TableFooter>
    );
  }

  return <></>;
}
