import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  margin: 8px;
`;

const SearchPagination = (props) => {
  const { handlePageChange, page, currentPageCount, totalCount, rowsPerPage } = props;

  // set to 1 if we are on the first page, otherwise multiply by items per page to get the starting point
  const currentStartNumber = page === 0 ? 1 : page * rowsPerPage;
  // take the starting number and add the count of the items on this specific page
  const currentEndNumber = currentStartNumber + currentPageCount;

  return (
    <FlexWrapper>
      <Typography>
        {currentStartNumber} - {currentEndNumber} of {totalCount}
      </Typography>
      <IconButton
        onClick={() => handlePageChange({page: page - 1})}
        disabled={page === 0}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={() => handlePageChange({page: page + 1})}
        disabled={page >= Math.ceil(totalCount / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </FlexWrapper>
  )
};


SearchPagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  currentPageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default SearchPagination;
