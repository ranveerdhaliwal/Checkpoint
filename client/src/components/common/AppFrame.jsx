import React from 'react';

import styled from 'styled-components';

const StyledFrame = styled.div`
  
  //margin-left: 180px;
  max-width: 920px;
  margin: auto;
  margin-top: 64px;
  padding: 0px 40px;
`;

const AppFrame = (props) => {
  return (
    <StyledFrame>
      {props.children}
    </StyledFrame>

  );
}

export default AppFrame;