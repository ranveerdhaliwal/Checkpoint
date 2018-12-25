import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: lightBlue[600],
    },
    text: {
      //secondary: '#fff'
      white: '#fff'
    }
  },
  typography: { useNextVariants: true },
});

export default theme;