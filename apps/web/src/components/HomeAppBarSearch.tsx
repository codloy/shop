'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useI18n } from '@/lib/i18n/client';
import { useMediaQuery, useTheme } from '@mui/material';
import { useQueryState, parseAsString } from 'next-usequerystate';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { trpc } from '@/lib/trpc/trpc';

export function HomeAppBarSearch() {
  const t = useI18n();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down('md');
  const isBreakpoint = useMediaQuery(breakpoint);
  const [search, setSearch] = useQueryState(
    'localSearch',
    parseAsString.withDefault('')
  );
  const router = useRouter();
  const searchCreate =
    trpc.accountSellProductSearchCreateMutation.useMutation();

  if (isBreakpoint) {
    return (
      <IconButton>
        <SearchIcon />
      </IconButton>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    searchCreate.mutate({ search });

    router.push(`/?search=${search}`);
  }

  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      onSubmit={onSubmit}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t('Type what you are looking for')}
        inputProps={{ 'aria-label': 'search codloy shop' }}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton sx={{ p: '10px' }} aria-label='directions'>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}
