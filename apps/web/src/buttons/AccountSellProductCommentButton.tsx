'use client';

import { useI18n } from '@/lib/i18n/client';
import { accountSellProductCommentCreateAtom } from 'atoms';
import { useAtom } from 'jotai';
import { Button } from '@mui/material';
import { AccountSellProductCommentCreateDialog } from '@/dialogs';
import CommentIcon from '@mui/icons-material/Comment';

export type AccountSellProductCommentButtonProps = {
  sellProductId: string;
};

export function AccountSellProductCommentButton(
  props: AccountSellProductCommentButtonProps
) {
  const { sellProductId } = props;
  const t = useI18n();
  const [accountSellProductCommentCreate, setAccountSellProductCommentCreate] =
    useAtom(accountSellProductCommentCreateAtom);

  function onCreateComment() {
    setAccountSellProductCommentCreate({
      open: true,
      sellProductId,
    });
  }
  return (
    <>
      <Button onClick={onCreateComment} startIcon={<CommentIcon />}>
        {t('Сэтгэгдэл бичих')}
      </Button>

      {accountSellProductCommentCreate.open && (
        <AccountSellProductCommentCreateDialog />
      )}
    </>
  );
}
