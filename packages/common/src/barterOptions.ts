export const barterOptions = ['Cash', 'Leasing', 'Barter', 'Loan'] as const;

export type BarterOption = (typeof barterOptions)[number];
