import { HomeSellProductsScreen } from '@/screens';
import React from 'react';

export type HomeSellProductsPageParams = {
  params: {
    categorySlugs: string[];
  };
};

export default function HomeSellProductsPage(
  props: HomeSellProductsPageParams
) {
  const {
    params: { categorySlugs },
  } = props;

  return <HomeSellProductsScreen categorySlugs={categorySlugs} />;
}
