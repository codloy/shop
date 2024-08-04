import { Checkbox } from '@mui/material';

export type ResourceSelectCheckboxProps = {
  id: string;
  selectedIds: string[];
  setSelectedIds(ids: string[]): void;
  selectMultiple?: boolean;
};

export function ResourceSelectCheckbox(props: ResourceSelectCheckboxProps) {
  const { id, selectedIds, setSelectedIds, selectMultiple } = props;

  function onSelect() {
    if (!selectMultiple) {
      setSelectedIds([id]);

      return;
    }

    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(idx => idx !== id));

      return;
    }

    setSelectedIds([...selectedIds, id]);
  }

  return <Checkbox checked={selectedIds.includes(id)} onChange={onSelect} />;
}
