import searchReducer from 'components/Search/ducks';
import collectionReducer from 'components/Collection/ducks';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  search: searchReducer,
  collection: collectionReducer
});

export default rootReducer;
