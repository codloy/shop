export const productConditions = [
  'New',
  'Almost new',
  'Used',
  'Refurbished',
] as const;

export type ProductConditionEnum = (typeof productConditions)[number];
