import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    //primary: lightBlue,
    primary: {
      main: lightBlue[600],
    },
    //contrastThreshold: 1,
    text: {
      //secondary: '#fff'
      white: '#fff'
    }
  },
  typography: { useNextVariants: true },
  // palette: {
  //   primary: { main: purple[500] }, // Purple and green play nicely together.
  //   secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  // },
  // typography: { useNextVariants: true },
});

console.log(theme);

export default theme;