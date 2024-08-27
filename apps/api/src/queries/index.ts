import { trpc } from '../trpc';
import { accountAccountsQuery } from './accountAccountsQuery';
import { accountChatQuery } from './accountChatQuery';
import { accountChatsQuery } from './accountChatsQuery';
import { accountProfileQuery } from './accountProfileQuery';
import { accountSellProductSaveCheckQuery } from './accountSellProductSaveCheckQuery';
import { greetingQuery } from './greetingQuery';
import { homeCategoryBreadcrumbQuery } from './homeCategoryBreadcrumbQuery';
import { homeCategoryNestedQuery } from './homeCategoryNestedQuery';
import { homeFilterProductCategoriesQuery } from './homeFilterProductCategoriesQuery';
import { homeSellProductBreadcrumbQuery } from './homeSellProductBreadcrumbQuery';
import { homeSellProductQuery } from './homeSellProductQuery';
import { homeSellProductsQuery } from './homeSellProductsQuery';

export const queryRouters = trpc.router({
  accountAccountsQuery,
  accountChatQuery,
  accountChatsQuery,
  accountProfileQuery,
  accountSellProductSaveCheckQuery,
  greetingQuery,
  homeCategoryBreadcrumbQuery,
  homeCategoryNestedQuery,
  homeFilterProductCategoriesQuery,
  homeSellProductBreadcrumbQuery,
  homeSellProductQuery,
  homeSellProductsQuery,
});
