'use client';

import { homeSelectedProductTypeAtom } from 'atoms';
import { useI18n } from '@/lib/i18n/client';
import { Button, Stack } from '@mui/material';
import { useAtom } from 'jotai';

export function SelectProductType() {
  const t = useI18n();
  const [selectedProductType, setSelectedProductType] = useAtom(
    homeSelectedProductTypeAtom
  );

  return (
    <Stack
      direction={'row'}
      spacing={1}
      p={2}
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      <Button
        onClick={() => setSelectedProductType('Buy')}
        variant={'text'}
        color={selectedProductType === 'Buy' ? 'primary' : 'inherit'}
      >
        {t('Авах зар')}
      </Button>
      <Button
        onClick={() => setSelectedProductType('Sell')}
        variant={'text'}
        color={selectedProductType === 'Sell' ? 'primary' : 'inherit'}
      >
        {t('Зарах зар')}
      </Button>
      <Button
        onClick={() => setSelectedProductType('Post')}
        variant={'text'}
        color={selectedProductType === 'Post' ? 'primary' : 'inherit'}
      >
        {t('Пост')}
      </Button>
    </Stack>
  );
}
