import { Checkbox } from '@mui/material';

export type ResourceSelectAllCheckboxProps = {
  found: number;
  allIds: string[];
  selectedIds: string[];
  setSelectedIds(ids: string[]): void;
  selectMultiple: boolean;
};

export function ResourceSelectAllCheckbox(
  props: ResourceSelectAllCheckboxProps
) {
  const { found, allIds, selectedIds, setSelectedIds, selectMultiple } = props;

  function onSelectAllIds() {
    if (!selectMultiple) {
      if (selectedIds.length) {
        setSelectedIds([]);
      }

      return;
    }

    if (selectedIds.length === found) {
      setSelectedIds([]);
      return;
    }

    setSelectedIds(allIds);
  }

  return (
    <Checkbox
      indeterminate={
        selectedIds.length ? undefined : selectedIds.length < found
      }
      checked={selectedIds.length === found}
      onChange={onSelectAllIds}
    />
  );
}
