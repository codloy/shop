import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { AccountHomeScreen } from '@/screens';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Account'),
  };
}

export default function AccountHomePage() {
  return <AccountHomeScreen />;
}
