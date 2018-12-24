import searchReducer from 'components/Search/ducks';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
