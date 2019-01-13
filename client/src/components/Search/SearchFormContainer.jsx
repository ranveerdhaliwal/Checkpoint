import { connect } from 'react-redux';

import { searchForGame } from './ducks';

import SearchForm from './SearchForm';

const mapDispatchToProps = (dispatch) => ({
  searchForGame: options => dispatch(searchForGame(options)),
});

export default connect(null, mapDispatchToProps)(SearchForm);