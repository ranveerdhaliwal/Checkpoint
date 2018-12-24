import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'style/theme';

import AppFrame from 'components/common/AppFrame';

import { Routes } from './pages/routes'

import NavBar from 'components/NavBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        
        <NavBar></NavBar>
        <AppFrame>
          <Routes></Routes>
        </AppFrame>
      </MuiThemeProvider>
    );
  }
}

export default App;
