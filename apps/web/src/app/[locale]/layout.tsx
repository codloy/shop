import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Locale } from '@/lib/i18n/locales';
import '@fontsource/inter';
import '@fontsource/roboto-mono';
import { I18nProvider } from '@/lib/i18n/components/I18nProvider';
import { MuiProvider } from '@/lib/mui/components/MuiProvider';
import { TRPCProvider } from '@/lib/trpc/provider';
import { QueryProvider } from '@/lib/query/provider';
import { JotaiProvider } from '@/prodivers';
import { SettingsProvider } from '@/components/settings/provider';
import { NotifyProvider } from '@/lib/notify/components/NotiProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/shopping-bag-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/shopping-bag-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export type RootLayoutProps = PropsWithChildren<{
  params: {
    locale: Locale;
  };
}>;

export default function RootLayout(props: RootLayoutProps) {
  const {
    children,
    params: { locale },
  } = props;

  return (
    <html lang={locale} data-color-scheme='light'>
      <body>
        <I18nProvider locale={locale}>
          <MuiProvider>
            <NotifyProvider>
              <TRPCProvider>
                <QueryProvider>
                  <JotaiProvider>
                    <SettingsProvider />
                    {children}
                  </JotaiProvider>
                </QueryProvider>
              </TRPCProvider>
            </NotifyProvider>
          </MuiProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
