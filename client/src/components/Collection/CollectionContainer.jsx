import { connect } from 'react-redux';

import Collection from './Collection';

import { collectionInProgressAdd, collectionCompletedAdd, collectionBacklogAdd,
  collectionInProgressRemove, collectionCompletedRemove, collectionBacklogRemove,
  collectionInProgressSet, collectionCompletedSet, collectionBacklogSet } from './ducks';

import { getGameDetails } from 'components/DetailSideBar/ducks';

const mapStateToProps = (state) => ({
  inprogress: state.collection.inprogress,
  completed: state.collection.completed,
  backlog: state.collection.backlog,
});

const mapDispatchToProps = (dispatch) => ({
  collectionInProgressAdd: (game) => dispatch(collectionInProgressAdd(game)),
  collectionCompletedAdd: (game) => dispatch(collectionCompletedAdd(game)),
  collectionBacklogAdd: (game) => dispatch(collectionBacklogAdd(game)),
  collectionInProgressRemove: (game) => dispatch(collectionInProgressRemove(game)),
  collectionCompletedRemove: (game) => dispatch(collectionCompletedRemove(game)),
  collectionBacklogRemove: (game) => dispatch(collectionBacklogRemove(game)),
  collectionInProgressSet: (game) => dispatch(collectionInProgressSet(game)),
  collectionCompletedSet: (game) => dispatch(collectionCompletedSet(game)),
  collectionBacklogSet: (game) => dispatch(collectionBacklogSet(game)),
  getGameDetails: (guid) => dispatch(getGameDetails(guid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection);

