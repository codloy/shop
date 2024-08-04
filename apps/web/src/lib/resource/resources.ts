export const resources = [
  'permissions',
  'roles',
  'accounts',
  'product-categories',
  'products',
  'sessions',
  'attributes',
  'attribute-datatypes',
] as const;

export type Resource = (typeof resources)[number];
