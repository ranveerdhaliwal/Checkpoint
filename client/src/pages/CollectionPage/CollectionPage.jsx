import React from 'react';

import { CollectionContainer } from 'components/Collection';

import styled from 'styled-components';

const StyledFrame = styled.div`
  padding: 0 100px;
`;

const CollectionPage = () => {
  return (
    <StyledFrame>
      <CollectionContainer>
      </CollectionContainer>
    </StyledFrame>
  );
}

export default CollectionPage;