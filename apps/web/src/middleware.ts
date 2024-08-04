import { I18nMiddleware } from '@/lib/i18n/middleware';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
