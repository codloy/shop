export const locales = ['en', 'mn'] as const;

export type Locale = (typeof locales)[number];
