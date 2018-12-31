import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FlagIcon from '@material-ui/icons/Flag';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import styled from 'styled-components';

import { YELLOWISH, ORANGISH } from 'style/Colors';

import NavLinkHolder from './NavLinkHolder';

import GitHub from 'style/icons/GitHub';

const StyledDiv = styled.div`
  margin-right: 4px;
`;

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, ${YELLOWISH} 0%, ${ORANGISH} 100%);
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const FillerDiv = styled.div`
  flex: 1 1 auto;
`;

const NavBar = (props) => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar variant="dense">
        <FlexWrapper>
          <StyledDiv>
            <FlagIcon />
          </StyledDiv>
          
          <Typography variant="h6" color="inherit">
            Checkpoint
          </Typography>
          
          <NavLinkHolder></NavLinkHolder>
          <FillerDiv></FillerDiv>
          
          <IconButton 
            component="a"
            target="_blank"
            color="inherit" 
            href="https://github.com/ranveerdhaliwal/checkpoint"
            aria-label="GitHub repo">
            <GitHub />
          </IconButton>
        </FlexWrapper>

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
