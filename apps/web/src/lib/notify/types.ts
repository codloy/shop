export const notiTypes = [
  'loading',
  'success',
  'error',
  'info',
  'warning',
  'default',
] as const;

export type NotiType = (typeof notiTypes)[number];
