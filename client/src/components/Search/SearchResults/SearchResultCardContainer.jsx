import { connect } from 'react-redux';

import SearchResultCard from './SearchResultCard';

import { collectionInProgressAdd, collectionCompletedAdd, collectionBacklogAdd } from 'components/Collection/ducks';

import { getGameDetails } from 'components/DetailSideBar/ducks';

const mapDispatchToProps = (dispatch) => ({
  addToInProgress: (game) => dispatch(collectionInProgressAdd(game)),
  addToCompleted: (game) => dispatch(collectionCompletedAdd(game)),
  addToBacklog: (game) => dispatch(collectionBacklogAdd(game)),
  getGameDetails: (guid) => dispatch(getGameDetails(guid)),
});

export default connect(null, mapDispatchToProps)(SearchResultCard);