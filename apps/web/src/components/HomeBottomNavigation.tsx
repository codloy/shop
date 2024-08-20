'use client';

import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SellIcon from '@mui/icons-material/Sell';
import PersonIcon from '@mui/icons-material/Person';
import { homeSelectedProductTypeAtom } from 'atoms';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';

export function HomeBottomNavigation() {
  const t = useI18n();
  const router = useRouter();
  const [selectedProductType, setSelectedProductType] = useAtom(
    homeSelectedProductTypeAtom
  );

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
      variant='elevation'
    >
      <BottomNavigation
        showLabels
        value={
          selectedProductType === 'Buy'
            ? 0
            : selectedProductType === 'Sell'
            ? 1
            : selectedProductType === 'Post'
            ? 2
            : 3
        }
        onChange={(_event, newValue) => {
          if (newValue === 0) {
            setSelectedProductType('Buy');
            router.push('/');
          } else if (newValue === 1) {
            setSelectedProductType('Sell');
            router.push('/');
          } else if (newValue === 2) {
            setSelectedProductType('Post');
            router.push('/');
          } else if (newValue === 3) {
            router.push('/account');
          }
        }}
      >
        <BottomNavigationAction label={t('Авах')} icon={<LocalMallIcon />} />
        <BottomNavigationAction label={t('Зарах')} icon={<SellIcon />} />
        <BottomNavigationAction label={t('Пост')} icon={<PostAddIcon />} />
        <BottomNavigationAction label={t('Бүртгэл')} icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
