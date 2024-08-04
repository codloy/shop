'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getInitColorSchemeScript } from '@mui/material/styles';
import { extendedTheme } from '@/lib/mui/theme/extendedTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PropsWithChildren } from 'react';

export type MuiProviderProps = PropsWithChildren<{}>;

export function MuiProvider(props: MuiProviderProps) {
  const { children } = props;

  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={extendedTheme} defaultMode='dark'>
        {getInitColorSchemeScript({
          attribute: 'data-mui-color-scheme',
          modeStorageKey: 'mui-mode',
          colorSchemeStorageKey: 'mui-color-scheme',
          defaultMode: 'system',
        })}
        <CssBaseline enableColorScheme />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
