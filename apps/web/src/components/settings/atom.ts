import { atom } from 'jotai';

export type SettingsDialogAtom = {
  open: boolean;
};

export const settingsDialogAtom = atom<SettingsDialogAtom>({
  open: false,
});
