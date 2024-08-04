export const dateRangeOptions = [
  'Today',
  'Yesterday',
  'The day before yesterday',
  'This week',
  'Previous week',
  'This month',
  'Previous month',
  'This year',
  'Previous year',
] as const;

export type DateRangeOption = (typeof dateRangeOptions)[number];
