import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { AuthSignOutScreen } from '@/screens';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Sign out'),
  };
}

export default function Page() {
  return <AuthSignOutScreen />;
}
