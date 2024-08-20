export const productDeliveryOptions = [
  'Free delivery',
  'Standard delivery',
  // 'Express delivery',
  'In-store pickup',
  // 'Digital delivery',
  'No delivery',
] as const;

export type ProductDeliveryOptionEnum = (typeof productDeliveryOptions)[number];
