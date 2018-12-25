import React from 'react';

import styled from 'styled-components';

import SearchResultCard from './SearchResultCard';
import SearchResultLoader from './SearchResultLoader';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const constructLoaders = () => {
  let loaders = [];
  for (let i of Array(8).keys()) {
    loaders.push(<SearchResultLoader key={i}></SearchResultLoader>);
  }
  return loaders;
}

const SearchResults = ({results, loading, error}) => {
  if (loading) {
    const loaders = constructLoaders();
    return (
      <WrapperDiv>
        {loaders}
      </WrapperDiv>
    );
  }

  let resultsDisplay = results.map(item => (
    <SearchResultCard
      key={item.id}
      name={item.name}
      releaseDate={item.original_release_date}
      image={item.image.small_url}
    >
    </SearchResultCard>
  ));

  return (
    <WrapperDiv>
      {resultsDisplay}
    </WrapperDiv>
  )
}

export default SearchResults;