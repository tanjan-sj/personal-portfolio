import { createTheme } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

const CustomTheme = createTheme({
  palette: {
    background: {
      default: '#212121',
      paper: '#4d4d4d',
    },
    primary: {
      main: '#212121',
      lighter: '#4d4d4d',
    },
    secondary: {
      main: '#808080',
      lighter: '#cccccc',
      linkColor: '#5a91bf',
    },
    textColor: {
      main: '#40a829',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});

export default CustomTheme;
