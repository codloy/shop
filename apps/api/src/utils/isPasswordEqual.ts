import { compare } from 'bcryptjs';

export async function isPasswordEqual(original: string, hash: string) {
  const isPasswordEqual = await compare(original, hash);

  return isPasswordEqual;
}
