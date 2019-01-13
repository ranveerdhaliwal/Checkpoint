import { connect } from 'react-redux';

import SearchResults from './SearchResults';

import { searchForGame } from '../ducks';

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
  handlePageChange: (options) => dispatch(searchForGame(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

