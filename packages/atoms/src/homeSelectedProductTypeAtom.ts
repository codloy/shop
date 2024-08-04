import { atomWithStorage } from 'jotai/utils';

export const homeSelectedProductTypeAtom = atomWithStorage<ProductTypeEnum>(
  'selectedProductType',
  'Sell'
);
