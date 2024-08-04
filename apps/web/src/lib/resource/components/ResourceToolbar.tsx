import { Box, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { ResourceSearch, ResourceSearchProps } from './ResourceSearch';
import { ResourceRefresh, ResourceRefreshProps } from './ResourceRefresh';
import { ResourceCreate, ResourceCreateProps } from './ResourceCreate';
import { ResourceUpdate, ResourceUpdateProps } from './ResourceUpdate';
import { ResourceDelete, ResourceDeleteProps } from './ResourceDelete';
import { ResourceInstall, ResourceInstallProps } from './ResourceInstall';
import { ResourceMenu, ResourceMenuProps } from './ResourceMenu';
import { ReactNode } from 'react';
import { ResourceDateRange, ResourceDateRangeProps } from './ResourceDateRange';
import { useAtomValue } from 'jotai';
import {
  ResourceExportToExcel,
  ResourceExportToExcelProps,
} from './ResourceExportToExcel';
import { ResourcePrint, ResourcePrintProps } from './ResourcePrint';
import { accountAtom } from 'atoms';
import { Resource } from '../resources';
import { ResourceSelect, ResourceSelectProps } from './ResourceSelect';
import { ResourceType } from '../types/ResourceType';
import { ResourcePage, ResourcePageProps } from './ResourcePage';
import { ResourceTake, ResourceTakeProps } from './ResourceTake';
import { ResourceViewType, ResourceViewTypeProps } from './ResourceViewType';

export type ResourceToolbarProps = {
  source: ResourceType;
  resource: Resource;
  beforeFlexGrow?: ReactNode;
  afterFlexGrow?: ReactNode;
} & ResourceSearchProps &
  ResourceRefreshProps &
  ResourceSelectProps &
  ResourceCreateProps &
  ResourceUpdateProps &
  ResourceDeleteProps &
  ResourceInstallProps &
  ResourceMenuProps &
  ResourceDateRangeProps &
  ResourceExportToExcelProps &
  ResourcePrintProps &
  ResourcePageProps &
  ResourceTakeProps &
  ResourceViewTypeProps;

export function ResourceToolbar(props: ResourceToolbarProps) {
  const {
    source,
    resource,
    searchProps,
    refreshProps,
    selectProps,
    createProps,
    updateProps,
    deleteProps,
    installProps,
    menuProps,
    beforeFlexGrow,
    afterFlexGrow,
    dateRangeProps,
    exportToExcelProps,
    printProps,
    pageProps,
    takeProps,
    viewTypeProps,
  } = props;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const account = useAtomValue(accountAtom);

  return (
    <Toolbar
      variant='dense'
      disableGutters
      sx={{
        p: 2,
        gap: 1,
        position: 'sticky',
        top: xs ? 48 : 64,
        // background: 'rgba(255, 255, 255, 0)',
        // borderRadius: '16px',
        // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(4.4px)',
        WebkitBackdropFilter: 'blur(4.4px)',
        zIndex: 1,
      }}
    >
      <Stack direction={xs ? 'column' : 'row'} spacing={2}>
        {viewTypeProps && <ResourceViewType viewTypeProps={viewTypeProps} />}
        {searchProps && <ResourceSearch searchProps={searchProps} />}
        {dateRangeProps && (
          <ResourceDateRange dateRangeProps={dateRangeProps} />
        )}
      </Stack>
      {beforeFlexGrow && beforeFlexGrow}
      <Box sx={{ flexGrow: 1 }} />
      {afterFlexGrow && afterFlexGrow}
      {refreshProps && <ResourceRefresh refreshProps={refreshProps} />}
      {selectProps && <ResourceSelect selectProps={selectProps} />}
      {source !== 'select' &&
        account?.permissions.includes(`${resource}:create`) &&
        createProps && <ResourceCreate createProps={createProps} />}
      {source !== 'select' &&
        account?.permissions.includes(`${resource}:update`) &&
        updateProps && <ResourceUpdate updateProps={updateProps} />}
      {source !== 'select' &&
        account?.permissions.includes(`${resource}:delete`) &&
        deleteProps && <ResourceDelete deleteProps={deleteProps} />}
      {source !== 'select' &&
        account?.permissions.includes(`${resource}:export-to-excel`) &&
        exportToExcelProps && (
          <ResourceExportToExcel exportToExcelProps={exportToExcelProps} />
        )}
      {source !== 'select' && printProps && (
        <ResourcePrint printProps={printProps} />
      )}
      {source !== 'select' && installProps && (
        <ResourceInstall installProps={installProps} />
      )}
      {source !== 'select' && menuProps && (
        <ResourceMenu menuProps={menuProps} toolbarProps={props} />
      )}
      {pageProps && <ResourcePage pageProps={pageProps} />}
      {takeProps && <ResourceTake takeProps={takeProps} />}
    </Toolbar>
  );
}
