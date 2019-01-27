import { connect } from 'react-redux';

import CollectionGameCard from './CollectionGameCard';

import { collectionInProgressRemove, collectionCompletedRemove, collectionBacklogRemove } from './ducks';

// const mapStateToProps = (state) => ({
//   inprogress: state.collection.inprogress,
//   completed: state.collection.completed,
//   backlog: state.collection.backlog,
// });

const mapDispatchToProps = (dispatch) => ({
  collectionInProgressRemove: (game) => dispatch(collectionInProgressRemove(game)),
  collectionCompletedRemove: (game) => dispatch(collectionCompletedRemove(game)),
  collectionBacklogRemove: (game) => dispatch(collectionBacklogRemove(game)),
})

export default connect(null, mapDispatchToProps)(CollectionGameCard);
