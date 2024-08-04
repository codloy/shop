import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import * as typography from './typography';
import * as components from './components';

export const extendedTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   // main: '#ff5252',
        // },
        AppBar: {
          darkBg: 'white',
          darkColor: '#121212',
        },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   // main: '#000',
        // },
        AppBar: {
          darkBg: '#121212',
        },
      },
    },
  },
  typography,
  components,
});
