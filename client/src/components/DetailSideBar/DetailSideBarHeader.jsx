import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const DetailSideBarHeader = (props) => {
  const { toggleSideBar } = props;

  const closeButton = (
    <IconButton 
      onClick={toggleSideBar}
      color="inherit"
      aria-label="close"
      >
      <CloseIcon />
    </IconButton>
  );
  
  return (
    <>
      <HeaderDiv>
        {closeButton}
        <Typography variant="subtitle1">Details</Typography>
      </HeaderDiv>
      <Divider />
    </>
  )
}

export default DetailSideBarHeader;