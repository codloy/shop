import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { AccountProductCreateScreen } from '@/screens';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Create product'),
  };
}

export default function AccountProductCreatePage() {
  return <AccountProductCreateScreen />;
}
