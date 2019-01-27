import React from 'react';

import { SearchFormContainer, SearchResultsContainer } from 'components/Search';

import { CenterColumnContent } from 'components/layout';

const SearchPage = () => {
  return (
    <CenterColumnContent>
      <SearchFormContainer></SearchFormContainer>
      <SearchResultsContainer></SearchResultsContainer>
    </CenterColumnContent>
  );
}

export default SearchPage;