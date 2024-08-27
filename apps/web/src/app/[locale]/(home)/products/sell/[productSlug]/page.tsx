import { Metadata } from 'next';
import { getI18n } from '@/lib/i18n/server';
import { HomeSellProductScreen } from '@/screens';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('Зарах зар'),
  };
}

export type HomeSellProductPageProps = {
  params: {
    productSlug: string;
  };
};

export default function HomeSellProductPage(props: HomeSellProductPageProps) {
  const { params } = props;

  return <HomeSellProductScreen productSlug={params.productSlug} />;
}
