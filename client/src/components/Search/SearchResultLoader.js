import React from 'react';

import ContentLoader from 'react-content-loader';

import styled from 'styled-components';

const width = 188;
const height = 321;

const StyledWrapper = styled.div`
    width: ${width}px;
    height: ${height}px;
    margin: 8px;
`;

const SearchResultLoader = (props) => (
  <StyledWrapper>
    <ContentLoader 
      height={height}
      width={width}
      speed={4}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  </StyledWrapper>
)


export default SearchResultLoader;