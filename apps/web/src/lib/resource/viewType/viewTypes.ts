export const viewTypes = ['Table', 'Grid'] as const;

export type ViewType = (typeof viewTypes)[number];
