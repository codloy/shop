'use client';

import { homeSelectedProductTypeAtom } from 'atoms';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useI18n } from '@/lib/i18n/client';
import PersonIcon from '@mui/icons-material/Person';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';

export function FilterList() {
  const t = useI18n();
  const selectedProductType = useAtomValue(homeSelectedProductTypeAtom);

  return (
    <List>
      <ListItem
        disablePadding
        sx={{ my: 0, borderRadius: 0 }}
        // selected={categorySlugs.length === 0}
      >
        <ListItemButton
          LinkComponent={Link}
          href={'/'}
          sx={{ borderRadius: 0, p: 0.4, pl: `6px` }}
          // disabled={parentId === null}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <CottageIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant='body2'
              // color={parentId === null ? 'primary.main' : undefined}
            >
              {t('Нүүр хуудас')}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ my: 0, borderRadius: 0 }}
        // selected={categorySlugs.length === 0}
      >
        <ListItemButton
          LinkComponent={Link}
          href={selectedProductType === 'Sell' ? '/account/products/sell' : ''}
          sx={{ borderRadius: 0, p: 0.4, pl: `6px` }}
          // disabled={parentId === null}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant='body2'
              // color={parentId === null ? 'primary.main' : undefined}
            >
              {t('Миний үүсгэсэн бараа')}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ my: 0, borderRadius: 0 }}
        // selected={categorySlugs.length === 0}
      >
        <ListItemButton
          LinkComponent={Link}
          href={
            selectedProductType === 'Sell' ? '/account/products/sell/saved' : ''
          }
          sx={{ borderRadius: 0, p: 0.4, pl: `6px` }}
          // disabled={parentId === null}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant='body2'
              // color={parentId === null ? 'primary.main' : undefined}
            >
              {t('Хадгалсан бараа')}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ my: 0, borderRadius: 0 }}
        // selected={categorySlugs.length === 0}
      >
        <ListItemButton
          LinkComponent={Link}
          href={
            selectedProductType === 'Sell'
              ? '/account/products/sell/search'
              : ''
          }
          sx={{ borderRadius: 0, p: 0.4, pl: `6px` }}
          // disabled={parentId === null}
        >
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant='body2'
              // color={parentId === null ? 'primary.main' : undefined}
            >
              {t('Хайсан түүх')}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
