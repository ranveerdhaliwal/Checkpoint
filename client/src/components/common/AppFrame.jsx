import React from 'react';

import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';

const StyledFrame = styled.div`
  margin-top: 64px;
  //margin-left: 180px;
`;

const AppFrame = (props) => {

    return (
      <StyledFrame>
        <Grid container justify="center">
          <Grid item>
            {props.children}
          </Grid>
        </Grid>
      </StyledFrame>

    );
}

export default AppFrame;