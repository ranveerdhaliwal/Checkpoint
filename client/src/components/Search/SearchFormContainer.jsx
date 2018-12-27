import { connect } from 'react-redux';

import { searchForGame } from './ducks';

import SearchForm from './SearchForm';

const mapDispatchToProps = (dispatch) => ({
  searchForGame: searchTerm => dispatch(searchForGame(searchTerm)),
});

export default connect(null, mapDispatchToProps)(SearchForm);