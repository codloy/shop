import { pgEnum } from 'drizzle-orm/pg-core';

export const attributeDatatypes = [
  'Text input',
  'Number input',
  'Year input',
  'Select input',
  'Checkbox input',
  'Radio input',
  'Location input',
  'Slider input',
] as const;

export type AttributeDatatypeEnum = (typeof attributeDatatypes)[number];

export const attributeDatatypeEnum = pgEnum(
  'attribute_datatypes',
  attributeDatatypes
);
