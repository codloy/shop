'use client';

import { Menu, MenuItem } from '@mui/material';
import { useAtom } from 'jotai';
import { accountMenuAtom } from 'atoms';
import { useI18n } from '@/lib/i18n/client';
import Link from 'next/link';

export function AccountMenu() {
  const t = useI18n();
  const [menu, setMenu] = useAtom(accountMenuAtom);

  function onClose() {
    setMenu({
      open: false,
      x: 0,
      y: 0,
    });
  }

  return (
    <Menu
      id='basic-menu'
      open={menu.open}
      anchorReference='anchorPosition'
      onClose={onClose}
      anchorPosition={{
        top: menu.y,
        left: menu.x,
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem LinkComponent={Link} href='/account/profile/update'>
        {t('Мэдээллээ засах')}
      </MenuItem>
      <MenuItem LinkComponent={Link} href='/auth/sign-out'>
        {t('Бүртгэлээс гарах')}
      </MenuItem>
    </Menu>
  );
}
