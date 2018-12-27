import { connect } from 'react-redux';

import SearchResultCard from './SearchResultCard';

import { collectionInProgressAdd, collectionCompletedAdd, collectionBacklogAdd } from 'components/Collection/ducks';

const mapDispatchToProps = (dispatch) => ({
  addToInProgress: (game) => dispatch(collectionInProgressAdd(game)),
  addToCompleted: (game) => dispatch(collectionCompletedAdd(game)),
  addToBacklog: (game) => dispatch(collectionBacklogAdd(game)),
});

export default connect(null, mapDispatchToProps)(SearchResultCard);