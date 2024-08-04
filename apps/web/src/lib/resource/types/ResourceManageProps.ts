export type ResourceManageProps = {
  type: 'manage';
  selectedIds: string[];
  setSelectedIds(ids: string[]): void;
  multiple: boolean;
};
