import { connect } from 'react-redux';

import SearchResults from './SearchResults';

import { searchForGameWithPageChange } from '../ducks';

const mapStateToProps = (state) => ({
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  page: state.search.page,
  totalCount: state.search.totalCount,
  rowsPerPage: state.search.rowsPerPage,
  inprogress: state.collection.inprogress,
  completed: state.collection.completed,
  backlog: state.collection.backlog,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange: (page) => dispatch(searchForGameWithPageChange(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

