import slugify from 'slugify';
import { generateRandomString } from './generateRandomString';

export type SlugOptions = {
  extended?: boolean;
};

export function slug(value: string, options?: SlugOptions) {
  const { extended = false } = options || {};

  let string = slugify(value, {
    replacement: '-',
    lower: true,
    strict: true,
    trim: true,
  });

  if (extended) string += `-${generateRandomString(5)}`;

  return string;
}
