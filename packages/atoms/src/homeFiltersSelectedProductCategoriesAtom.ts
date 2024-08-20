import { atom } from 'jotai';

export const homeFiltersSelectedProductCategoriesAtom = atom<
  { id: string; values: string[] }[]
>([]);
