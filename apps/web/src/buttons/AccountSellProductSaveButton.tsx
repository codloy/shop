'use client';

import { useI18n } from '@/lib/i18n/client';
import { trpc } from '@/lib/trpc/trpc';
import { Button, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MouseEvent } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { usePathname, useRouter } from 'next/navigation';

export type AccountSellProductSaveButtonProps = {
  sellProductId: string;
  iconButton?: boolean;
};

export function AccountSellProductSaveButton(
  props: AccountSellProductSaveButtonProps
) {
  const { sellProductId, iconButton = false } = props;
  const t = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const { enqueueSnackbar } = useSnackbar();
  const save = trpc.accountSellProductSaveMutation.useMutation({
    onSuccess() {
      enqueueSnackbar('Амжилттай хадгаллаа', {
        variant: 'success',
      });

      check.refetch();
    },
    onError(error) {
      if (error.data?.code === 'UNAUTHORIZED') {
        enqueueSnackbar(t('Энэ үйлдлийг хийхийн тулд эхлээд нэвтэрнэ үү'));

        router.push(`/auth/sign-in?continue=${encodeURIComponent(pathname)}`);
      }
    },
  });
  const remove = trpc.accountSellProductSaveDeleteMutation.useMutation({
    onSuccess() {
      enqueueSnackbar('Амжилттай хаслаа', {
        variant: 'success',
      });

      check.refetch();
    },
    onError(error) {
      if (error.data?.code === 'UNAUTHORIZED') {
        enqueueSnackbar(t('Энэ үйлдлийг хийхийн тулд эхлээд нэвтэрнэ үү'));

        router.push(`/auth/sign-in?continue=${encodeURIComponent(pathname)}`);
      }
    },
  });
  const check = trpc.accountSellProductSaveCheckQuery.useQuery({
    sellProductId,
  });

  function onSave(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    save.mutate({ sellProductId });
  }

  function onRemove(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    remove.mutate({ sellProductId });
  }

  if (check.data?.liked) {
    if (iconButton) {
      return (
        <IconButton onClick={onRemove}>
          <FavoriteBorderIcon />
        </IconButton>
      );
    }

    return (
      <Button onClick={onRemove} startIcon={<FavoriteBorderIcon />}>
        {t('Хадгалснаас хасах')}
      </Button>
    );
  }

  if (iconButton) {
    return (
      <IconButton onClick={onSave}>
        <FavoriteIcon />
      </IconButton>
    );
  }

  return (
    <Button onClick={onSave} startIcon={<FavoriteIcon />}>
      {t('Хадгалах')}
    </Button>
  );
}
