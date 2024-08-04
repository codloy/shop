import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type ResourceTakeAbleProps = {
  take: number;
  setTake(take: number): void;
};

export type ResourceTakeProps = {
  takeProps?: ResourceTakeAbleProps;
};

const options = [1, 10, 25, 50, 100, 250, 500, 750, 1000];

export function ResourceTake(props: ResourceTakeProps) {
  const { takeProps } = props;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  if (takeProps) {
    const { take, setTake } = takeProps;

    return (
      <Fragment>
        <ButtonGroup
          size='small'
          variant='contained'
          ref={anchorRef}
          aria-label='Button group with a nested menu'
        >
          <Button sx={{ px: 0, mx: 0, minWidth: 27 }}>{take}</Button>
          <Button
            size='small'
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label='select merge strategy'
            aria-haspopup='menu'
            onClick={handleToggle}
            sx={{ px: 0, mx: 0, minWidth: 27 }}
          >
            <ArrowDropDownIcon fontSize='small' />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id='split-button-menu' autoFocusItem>
                    {options.map(option => (
                      <MenuItem
                        key={option}
                        selected={option === take}
                        onClick={() => {
                          setTake(option);
                          setOpen(false);
                        }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }

  return <></>;
}
