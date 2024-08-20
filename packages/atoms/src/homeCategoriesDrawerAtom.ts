import { atom } from 'jotai';

export type HomeCategoriesDrawerAtom = {
  open: boolean;
  width: number;
};

export const homeCategoriesDrawerAtom = atom<HomeCategoriesDrawerAtom>({
  open: false,
  width: 260,
});
