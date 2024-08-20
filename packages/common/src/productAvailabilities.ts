export const productAvailabilities = ['Available', 'Preorder'] as const;

export type ProductAvailabilityEnum = (typeof productAvailabilities)[number];
