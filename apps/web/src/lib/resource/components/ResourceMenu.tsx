import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useI18n } from '@/lib/i18n/client';
import { ResourceToolbarProps } from './ResourceToolbar';
import { useAtomValue } from 'jotai';
import { accountAtom, AccountMenuAtom } from 'atoms';

export type ResourceMenuAbleProps = {
  menu: AccountMenuAtom;
  setMenu(menu: AccountMenuAtom): void;
};

export type ResourceMenuProps = {
  menuProps?: ResourceMenuAbleProps;
};

export type ResourceMenuPropsWithToolbarProps = ResourceMenuProps & {
  toolbarProps?: ResourceToolbarProps;
};

export function ResourceMenu(props: ResourceMenuPropsWithToolbarProps) {
  const t = useI18n();
  const { menuProps, toolbarProps } = props;
  const account = useAtomValue(accountAtom);

  if (menuProps) {
    const { menu, setMenu } = menuProps;
    const {
      resource = 'accounts',
      refreshProps,
      createProps,
      updateProps,
      deleteProps,
      installProps,
      exportToExcelProps,
      printProps,
    } = toolbarProps || {};

    return (
      <>
        <IconButton
          onClick={function (event) {
            setMenu({
              open: true,
              y: event.clientY,
              x: event.clientX,
            });
          }}
          sx={{
            display: { xs: 'inline-flex', sm: 'inline-flex', md: 'none' },
          }}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          anchorReference='anchorPosition'
          anchorPosition={{
            top: menu.y,
            left: menu.x,
          }}
          open={menu.open}
          onClose={function () {
            setMenu({
              open: false,
              x: 0,
              y: 0,
            });
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuList dense sx={{ width: 200 }}>
            {refreshProps && (
              <MenuItem onClick={refreshProps.onRefresh}>
                <ListItemIcon>
                  <RefreshIcon />
                </ListItemIcon>
                <ListItemText>{t('Refresh')}</ListItemText>
              </MenuItem>
            )}
            {account?.permissions.includes(`${resource}:create`) &&
              createProps && (
                <MenuItem onClick={createProps.onCreate}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Create')}</ListItemText>
                </MenuItem>
              )}
            {account?.permissions.includes(`${resource}:update`) &&
              updateProps && (
                <MenuItem onClick={updateProps.onUpdate}>
                  <ListItemIcon>
                    <BrushIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Update')}</ListItemText>
                </MenuItem>
              )}
            {account?.permissions.includes(`${resource}:delete`) &&
              deleteProps && (
                <MenuItem onClick={deleteProps.onDelete}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Delete')}</ListItemText>
                </MenuItem>
              )}
            {account?.permissions.includes(`${resource}:export-to-excel`) &&
              exportToExcelProps && (
                <MenuItem onClick={exportToExcelProps.onExportToExcel}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Export to excel')}</ListItemText>
                </MenuItem>
              )}
            {account?.permissions.includes(`${resource}:print`) &&
              printProps && (
                <MenuItem onClick={printProps.onPrint}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Print')}</ListItemText>
                </MenuItem>
              )}
            {account?.permissions.includes(`${resource}:install`) &&
              installProps && (
                <MenuItem onClick={installProps.onInstall}>
                  <ListItemIcon>
                    <UploadIcon />
                  </ListItemIcon>
                  <ListItemText>{t('Install')}</ListItemText>
                </MenuItem>
              )}
          </MenuList>
        </Menu>
      </>
    );
  }

  return <></>;
}
