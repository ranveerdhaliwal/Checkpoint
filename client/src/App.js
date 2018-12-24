import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import AppFrame from './components/common/AppFrame';

import { Routes } from './pages/routes'

import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-left: -18px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline></CssBaseline>
        <AppBar position="fixed" >
          <Toolbar variant="dense">
            <StyledDiv>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </StyledDiv>
            
            <Typography variant="h6" color="inherit">
              Checkpoint
            </Typography>
            
            <Link to="/Search">Search</Link>

          </Toolbar>
        </AppBar>

        <AppFrame>
          <Routes></Routes>
        </AppFrame>
      </div>
    );
  }
}

export default App;
