import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { AccountProductSellCreateScreen } from '@/screens/AccountSellProductCreateScreen';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Create sell product'),
  };
}

export default function AccountProductSellCreatePage() {
  return <AccountProductSellCreateScreen />;
}
