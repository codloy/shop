'use client';

import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageLoading } from '@/components';
import { useSetAtom } from 'jotai';
import { queryClient } from '@/lib/query/client';
import { useI18n } from '@/lib/i18n/client';
import { trpc } from '@/lib/trpc/trpc';
import { accountAtom } from 'atoms';

export function AuthSignOutScreen() {
  const t = useI18n();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const setAccount = useSetAtom(accountAtom);
  const searchParams = useSearchParams();
  const signOut = trpc.authSignOutMutation.useMutation({
    onSuccess() {
      enqueueSnackbar(t('Signed out'), { variant: 'success' });
    },
    onError({ message }) {
      enqueueSnackbar(message, { variant: 'error' });
    },
    onSettled() {
      const _continue = searchParams.get('continue');

      setAccount(null);

      localStorage.clear();

      queryClient.clear();
      queryClient.invalidateQueries();
      queryClient.removeQueries();

      if (_continue) {
        router.replace(
          `/auth/sign-in?continue=${encodeURIComponent(_continue)}`
        );
      } else {
        router.replace('/auth/sign-in');
      }
    },
  });

  useEffect(() => {
    signOut.mutate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PageLoading />;
}
