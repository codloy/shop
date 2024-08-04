import { atom } from 'jotai';

export type AccountMenuAtom = {
  open: boolean;
  x: number;
  y: number;
};

export const accountMenuAtom = atom<AccountMenuAtom>({
  open: false,
  x: 0,
  y: 0,
});
