'use client';

import { type ReactNode } from 'react';
import { trpc } from './trpc';
import { trpcClient } from './client';
import { queryClient } from '../query/client';
import { QueryProvider } from '../query/provider';

export type TRPCProviderProps = {
  children: ReactNode;
};

export function TRPCProvider(props: TRPCProviderProps) {
  const { children } = props;

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryProvider>{children}</QueryProvider>
    </trpc.Provider>
  );
}
