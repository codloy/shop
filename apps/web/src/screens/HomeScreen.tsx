'use client';

import { HomeSellProductsScreen } from './HomeSellProductsScreen';

export function HomeScreen() {
  const categorySlugs: string[] = [];

  return <HomeSellProductsScreen categorySlugs={categorySlugs} />;
}
