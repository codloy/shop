import { atom } from 'jotai';

export type AuthSignInDrawerAtom = {
  open: boolean;
};

export const authSignInDrawerAtom = atom({
  open: false,
});
