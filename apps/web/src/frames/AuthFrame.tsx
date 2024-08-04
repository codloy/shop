'use client';

import { ReactNode } from 'react';

export type AuthFrameProps = {
  children: ReactNode;
};

export function AuthFrame(props: AuthFrameProps) {
  const { children } = props;

  return <>{children}</>;
}
