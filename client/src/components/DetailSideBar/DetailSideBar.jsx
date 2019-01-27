import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';

import styled from 'styled-components';

import DetailSideBarContent from './DetailSideBarContent';
import DetailSideBarHeader from './DetailSideBarHeader';

import { GRAY } from 'style/Colors';

const drawerWidth = 300;

const StyledDrawer = styled((props) => (
  <Drawer classes={{ paper: 'paper' }} {...props} />
))`
  && {
    /*width: ${drawerWidth}px;*/
    width: ${props => props.open ? `${drawerWidth}px` : "0px"};

  }

  & .paper {
    margin-top: 48px;
    width: ${drawerWidth}px;
    /*width: ${props => props.open ? `${drawerWidth}px` : "0px"};*/
    background-color: ${GRAY};
  }
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;

`

const DetailSideBar = (props) => {
  

  const { 
    results, 
    currentGameID, 
    loading, 
    open,
    toggleSideBar
  } = props;

  const game = results[currentGameID];
  
  console.log(game);

  const header = (
    <DetailSideBarHeader toggleSideBar={toggleSideBar} />
  );

  const content = (
    <DetailSideBarContent
      loading={loading}
      game={game}
    />
  );

  return (
    <>
      <Hidden smUp implementation="js">
        <StyledDrawer
          variant="temporary"
          anchor="right"
          open={open}
        >
          <SideBarWrapper>
            {header}
            <Fade in={!loading}>
              {content}
            </Fade>
          </SideBarWrapper>
        </StyledDrawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <StyledDrawer 
          variant="persistent"
          anchor="right"
          open={open}
        >
          <SideBarWrapper>
            {header}
            <Fade in={!loading}>
              {content}
            </Fade>
          </SideBarWrapper>
        </StyledDrawer>
      </Hidden>
    </>
    
    
  )
}


export default DetailSideBar;