import React from 'react';

import styled from 'styled-components';

const LoadingDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const SearchResults = ({results, loading, error}) => {
  if (loading) {
    return <LoadingDiv></LoadingDiv>;
  }

  let resultsDisplay = results.map(item => (
    <li key={item.id}>
     {item.name} 
    </li>
  ));

  return (
    <ul>
      {resultsDisplay}
    </ul>
  )
}

export default SearchResults;