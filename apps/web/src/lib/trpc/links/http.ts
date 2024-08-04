import { httpLink } from '@trpc/client/links/httpLink';

export const getHTTPLink = httpLink({
  url: process.env.NEXT_PUBLIC_HTTP_URL || '',
  // fetch: async (input, init?) => {
  //   const fetch = getFetch();

  //   return fetch(input, {
  //     ...init,
  //     credentials: 'include',
  //     headers: {
  //       ...init?.headers,
  //       Authorization: `Bearer ${getAccessToken()}`,
  //     },
  //   });
  // },
});
