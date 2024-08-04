'use client';

import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';
import { NotiLoading } from './NotiLoading';
import { NotiSuccess } from './NotiSuccess';
import { NotiError } from './NotiError';
import { NotiInfo } from './NotiInfo';
import { NotiWarning } from './NotiWarning';
import { NotiDefault } from './NotiDefault';
import { FadeTransition } from '../transitions/FadeTransition';

declare module 'notistack' {
  interface VariantOverrides {
    loading: true;
  }
}

export type NotifyProviderProps = PropsWithChildren<{}>;

export function NotifyProvider(props: NotifyProviderProps) {
  const { children } = props;

  return (
    <SnackbarProvider
      dense
      maxSnack={8}
      preventDuplicate={false}
      Components={{
        loading: NotiLoading,
        success: NotiSuccess,
        error: NotiError,
        info: NotiInfo,
        warning: NotiWarning,
        default: NotiDefault,
      }}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      autoHideDuration={3000}
      TransitionComponent={FadeTransition}
    >
      {children}
    </SnackbarProvider>
  );
}
