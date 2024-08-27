import { atom } from 'jotai';

export type AccountSellProductCommentCreateAtom = {
  open: boolean;
  sellProductId: string;
};

export const accountSellProductCommentCreateAtom =
  atom<AccountSellProductCommentCreateAtom>({
    open: false,
    sellProductId: '',
  });
