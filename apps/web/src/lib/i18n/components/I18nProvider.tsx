import { I18nProviderClient } from '../client';
import { Locale } from '../locales';
import { PropsWithChildren } from 'react';

export type I18nProviderProps = PropsWithChildren<{
  locale: Locale;
}>;

export function I18nProvider(props: I18nProviderProps) {
  const { children, locale } = props;

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
