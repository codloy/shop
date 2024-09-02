import {
  attributeDatatypes,
  productAvailabilities,
  productConditions,
  productDeliveryOptions,
} from 'common';
import { z } from 'zod';

export const accountSellProductCreateSchema = z.object({
  name: z.string().refine(val => val !== '', {
    message: 'Enter product name',
  }),
  slug: z.string(),
  description: z.string(),
  categorySlug: z.string().min(1),
  price: z.coerce.number().min(100),
  isPriceNegotiable: z.boolean(),
  isFree: z.boolean(),
  canBarter: z.boolean(),
  condition: z
    .enum(productConditions)
    .nullable()
    .refine(val => val !== null, {
      message: 'Select product condition',
    }),
  deliveryOption: z
    .enum(productDeliveryOptions)
    .nullable()
    .refine(val => val !== null, {
      message: 'Select product delivery option',
    }),
  availability: z
    .enum(productAvailabilities)
    .nullable()
    .refine(val => val !== null, {
      message: 'Select product availability',
    }),
  productImages: z
    .array(z.object({ imageURL: z.string(), isFront: z.boolean() }))
    .min(1, {
      message: 'Select product image',
    }),
  categoryAttributes: z.array(
    z.object({
      _id: z.string().min(1),
      name: z.string().min(1),
      datatype: z.enum(attributeDatatypes),
      isRequired: z.boolean(),
      options: z.array(
        z.object({
          _id: z.string().min(1),
          value: z.string(),
          isSelected: z.boolean(),
        })
      ),
    })
  ),
  paymentType: z.object({
    cash: z.coerce.number().min(0).max(100),
    barter: z.coerce.number().min(0).max(100),
    loan: z.coerce.number().min(0).max(100),
    leasing: z.coerce.number().min(0).max(100),
  }),
  barterProducts: z.array(z.string()),
});

export type AccountSellProductCreateSchema = z.infer<
  typeof accountSellProductCreateSchema
>;

export const accountSellProductCreateDefaultSchema: AccountSellProductCreateSchema =
  {
    name: '',
    slug: '',
    description: '',
    categorySlug: '',
    price: 0,
    isPriceNegotiable: false,
    isFree: false,
    canBarter: false,
    condition: 'New',
    deliveryOption: 'Free delivery',
    availability: 'Available',
    productImages: [],
    categoryAttributes: [],
    paymentType: {
      cash: 0,
      barter: 0,
      loan: 0,
      leasing: 0,
    },
    barterProducts: [],
  };
