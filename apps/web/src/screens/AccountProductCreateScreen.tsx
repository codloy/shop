'use client';

import {
  CardActionArea,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { AccountFrame } from '@/frames';
import { useI18n } from '@/lib/i18n/client';
import { productTypes } from 'common';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SellIcon from '@mui/icons-material/Sell';
import Link from 'next/link';

export function AccountProductCreateScreen() {
  const t = useI18n();

  return (
    <AccountFrame>
      <Container maxWidth='md' sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {productTypes.map(type => (
            <Grid key={type} item xs={12} sm={4}>
              <CardActionArea
                LinkComponent={Link}
                href={`/account/products/${type.toLowerCase()}/create`}
              >
                <Paper sx={{ p: 2 }}>
                  <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    spacing={2}
                  >
                    {type === 'Sell' ? (
                      <SellIcon />
                    ) : type === 'Buy' ? (
                      <LocalMallIcon />
                    ) : (
                      <PostAddIcon />
                    )}
                    <Typography variant='button'>{t(type)}</Typography>
                  </Stack>
                </Paper>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AccountFrame>
  );
}
