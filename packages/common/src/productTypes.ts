export const productTypes = ['Buy', 'Sell', 'Post'] as const;

export type ProductTypeEnum = (typeof productTypes)[number];
