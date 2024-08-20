export const productStatuses = ['Available', 'Sold', 'Deleted'] as const;

export type ProductStatusEnum = (typeof productStatuses)[number];
