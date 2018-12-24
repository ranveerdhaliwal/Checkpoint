import { connect } from 'react-redux';

import SearchResults from './SearchResults'

const mapStateToProps = (state) => ({
  results: state.search.results,
  loading: state.search.loading
});

export default connect(mapStateToProps)(SearchResults);

