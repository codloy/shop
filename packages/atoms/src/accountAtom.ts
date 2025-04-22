import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { PermissionEnum } from 'db';

export type AccountAtom = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  permissions: PermissionEnum[];
  roleName: string;
} | null;

export const accountAtom = atomWithStorage<AccountAtom>('account', null);
export const accountDrawerWidthAtom = atom(260);
export const accountDrawerOpenAtom = atom(false);
