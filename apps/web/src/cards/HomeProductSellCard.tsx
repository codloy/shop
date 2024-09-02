'use client';

import type { ProductCategoryTable, ProductImageTable, ProductTable } from 'db';
import { convertToTugrug, formatAsCurrency } from 'common';
import {
  CardActionArea,
  Paper,
  Stack,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import { AccountSellProductSaveButton } from '@/buttons';

export type HomeProductSellCardProps = {
  product: ProductTable;
  category: ProductCategoryTable | null;
  images: ProductImageTable[];
};

export function HomeProductSellCard(props: HomeProductSellCardProps) {
  const { product, images, category } = props;

  return (
    <CardActionArea
      LinkComponent={Link}
      href={`/products/sell/${product.slug}`}
    >
      <Paper>
        <Stack spacing={1}>
          <Avatar
            sx={{ width: '100%', height: 230 }}
            src={images.length ? images[0].imageURL : '/no-image.jpg'}
            variant='rounded'
          />
          <Divider />
          <Stack sx={{ p: 1, px: 2 }} spacing={1}>
            <Stack>
              <Typography noWrap variant='body2'>
                {product.name}
              </Typography>
              {category && (
                <Typography noWrap variant='caption'>
                  {category.name}
                </Typography>
              )}
            </Stack>
            <Typography variant='button' fontWeight={600}>
              {formatAsCurrency(convertToTugrug(product.price))}
            </Typography>
          </Stack>
          <Divider />
          <Stack sx={{ px: 1, pb: 1 }} direction={'row'}>
            <AccountSellProductSaveButton
              sellProductId={product.id}
              iconButton
            />
          </Stack>
        </Stack>
      </Paper>
    </CardActionArea>
  );
}
