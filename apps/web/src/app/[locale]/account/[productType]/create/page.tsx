import { Metadata } from 'next';
import { AccountProductSellCreateScreen } from './screen';
import { getI18n } from '@/lib/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Create sell product'),
  };
}

export default function AccountProductSellCreatePage() {
  return <AccountProductSellCreateScreen />;
}
