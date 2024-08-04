import { createI18nMiddleware } from 'next-international/middleware';
import { locales } from './locales';

export const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: process.env.LOCALE === 'en' ? 'en' : 'mn',
  urlMappingStrategy: 'rewriteDefault',
});

export const I18nMiddlewareConfig = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
