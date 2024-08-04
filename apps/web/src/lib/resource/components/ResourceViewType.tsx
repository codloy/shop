import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ViewType } from '../viewType/viewTypes';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

export type ResourceViewTypeAbleProps = {
  viewType: ViewType;
  setViewType(viewType: ViewType): void;
};

export type ResourceViewTypeProps = {
  viewTypeProps?: ResourceViewTypeAbleProps;
};

export function ResourceViewType(props: ResourceViewTypeProps) {
  const { viewTypeProps } = props;

  if (viewTypeProps) {
    const { viewType, setViewType } = viewTypeProps;

    return (
      <ToggleButtonGroup
        size='small'
        value={viewType}
        exclusive
        onChange={(_event, viewType) => setViewType(viewType)}
        aria-label='text alignment'
      >
        <ToggleButton value={'Table'} aria-label='left aligned'>
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value={'Grid'} aria-label='centered'>
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }

  return <></>;
}
