import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'style/theme';

import { AppFrame, ContentFrame } from 'components/layout';

import { Routes } from './pages/routes'

import NavBar from 'components/NavBar';
import DetailSideBarContainer from 'components/DetailSideBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>

        <AppFrame>
          <NavBar></NavBar>
          <ContentFrame>
            <Routes></Routes>
          </ContentFrame>
          <DetailSideBarContainer></DetailSideBarContainer>
        </AppFrame>

      </MuiThemeProvider>
    );
  }
}

export default App;
