import searchReducer from 'components/Search/ducks';
import collectionReducer from 'components/Collection/ducks';
import detailSideBarReducer from 'components/DetailSideBar/ducks';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  search: searchReducer,
  collection: collectionReducer,
  detail: detailSideBarReducer
});

export default rootReducer;
