import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { AuthSignUpScreen } from '@/screens';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Sign up'),
  };
}

export default function Page() {
  return <AuthSignUpScreen />;
}
