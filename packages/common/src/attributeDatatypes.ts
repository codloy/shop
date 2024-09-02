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
