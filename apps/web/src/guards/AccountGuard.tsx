'use client';

import { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';
import { trpc } from '@/lib/trpc/trpc';
import { PageLoading } from '@/components';

export type AccountGuardProps = PropsWithChildren<{}>;

export function AccountGuard(props: AccountGuardProps): JSX.Element {
  const { children } = props;
  const { isLoading, isError } = trpc.accountProfileQuery.useQuery();

  if (isLoading) {
    return <PageLoading />;
  }

  if (isError) {
    redirect('/auth/sign-in');
  }

  return <>{children}</>;
}
