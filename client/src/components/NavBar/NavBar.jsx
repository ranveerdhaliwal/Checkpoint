import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FlagIcon from '@material-ui/icons/Flag';
import Typography from '@material-ui/core/Typography';

import { StyledLink } from 'components/common';

import styled from 'styled-components';

import { YELLOWISH, ORANGISH } from 'style/Colors';

import NavLinkHolder from './NavLinkHolder';

const StyledDiv = styled.div`
  margin-right: 4px;
`;

const StyledAppBar = styled(AppBar)`
  //background: linear-gradient(to right, #ffd400 0%, #ffbd04 100%);

  //background: linear-gradient(to right, #fcba17 0%, #fd571d 50%, #fc4945 100%);
  background: linear-gradient(to right, ${YELLOWISH} 0%, ${ORANGISH} 100%);

`;

const NavBar = (props) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar variant="dense">
        <StyledDiv>
          <FlagIcon />
        </StyledDiv>
        
        <Typography variant="h6" color="inherit">
          Checkpoint
        </Typography>
        
        <NavLinkHolder></NavLinkHolder>

      </Toolbar>
    </StyledAppBar>
  )
}


NavBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default NavBar;

