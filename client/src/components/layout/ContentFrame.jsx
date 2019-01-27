import React from 'react';

import styled from 'styled-components';

const StyledContentFrame = styled.div`
  /*max-width: 1120px;*/
  //margin: auto;
  margin-top: 64px;
  padding: 0px 24px;
  width: 100%;
  overflow: scroll;
  height: calc(100vh - 48px);
`;

const ContentFrame = (props) => {
  return (
    <StyledContentFrame>
      {props.children}
    </StyledContentFrame>

  );
}

export default ContentFrame;