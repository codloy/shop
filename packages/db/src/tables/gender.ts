import { pgEnum } from 'drizzle-orm/pg-core';

export const genders = [
  'Male',
  'Female',
  'Not applicable',
  'Rather not say',
] as const;

export type GenderEnum = (typeof genders)[number];

export const genderEnum = pgEnum('genders', genders);
