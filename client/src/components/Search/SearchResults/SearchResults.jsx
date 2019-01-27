import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import SearchResultCardContainer from './SearchResultCardContainer';
import SearchResultLoader from './SearchResultLoader';
import SearchPagination from '../SearchPagination';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
// putting a bunch of placeholder loaders on the screen to take up a good amount of space
const constructLoaders = () => {
  let loaders = [];
  for (let i of Array(10).keys()) {
    loaders.push(<SearchResultLoader key={i}></SearchResultLoader>);
  }
  return loaders;
}

const findGameInList = (list, id) => {
  const game = list.find((obj) => {
    return obj.id === id;
  });

  return typeof(game) !== 'undefined';
}


const SearchResults = (props) => {
  const {
    results, loading, error,
    page, totalCount, rowsPerPage,
    handlePageChange, inprogress, completed, backlog
  } = props;

  if (loading) {
    const loaders = constructLoaders();
    return (
      <WrapperDiv>
        {loaders}
      </WrapperDiv>
    );
  }

  const resultsDisplay = results.map(item => {
    const foundInProgress = findGameInList(inprogress, item.id);
    const foundInCompleted = findGameInList(completed, item.id);
    const foundInBacklog = findGameInList(backlog, item.id);

    return (
      <SearchResultCardContainer
        key={item.id}
        
        
        game={item}

        foundInProgress={foundInProgress}
        foundInCompleted={foundInCompleted}
        foundInBacklog={foundInBacklog}
      >
      </SearchResultCardContainer>
    )
  });

  const pagination = (totalCount !== 0 ? 
    <SearchPagination
      page={page}
      currentPageCount={results.length}
      totalCount={totalCount}
      rowsPerPage={rowsPerPage}
      handlePageChange={handlePageChange}
    >
    </SearchPagination>
    :
    null
  )

  return (
    <WrapperDiv>
      {resultsDisplay}
      {pagination}
    </WrapperDiv>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  page: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  inprogress: PropTypes.array.isRequired,
  completed: PropTypes.array.isRequired,
  backlog: PropTypes.array.isRequired,
};

export default SearchResults;
