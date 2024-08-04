import Button from '@mui/material/Button';
import { NotiType, notiTypes } from '../types';
import { useNoti } from '../useNoti';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Stack } from '@mui/material';

export function NotiDebugger() {
  const { noti } = useNoti();

  const onType = (type: NotiType) => {
    noti({
      variant: type,
      message: type,
    });
  };

  return (
    <Box>
      <Stack direction={'row'} spacing={2}>
        {notiTypes.map(type => (
          <Button
            key={type}
            onClick={() => onType(type)}
            startIcon={<NotificationsIcon />}
            variant='text'
            color='inherit'
          >
            {type}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
