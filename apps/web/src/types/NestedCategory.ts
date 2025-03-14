export type NestedCategory = {
  id: string;
  name: string;
  slug: string;
  href: string;
  isSelected: boolean;
  categories: NestedCategory[];
};
