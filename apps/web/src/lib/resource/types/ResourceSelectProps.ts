export type ResourceSelectProps = {
  type: 'select';
  selectedIds: string[];
  setSelectedIds(ids: string[]): void;
  multiple: boolean;
};
