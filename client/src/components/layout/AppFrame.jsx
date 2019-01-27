import React from 'react';

import styled from 'styled-components';

const StyledAppFrame = styled.div`
  display: flex;
`;

const AppFrame = (props) => {
  return (
    <StyledAppFrame>
      {props.children}
    </StyledAppFrame>

  );
}

export default AppFrame;