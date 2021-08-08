import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#43454d',
    },
    error: {
      main: orange[400],
    },
    background: {
      default: '#F1F3F4',
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeightBold: "700",
    fontWeightRegular: "400"
  }
});

export default theme;