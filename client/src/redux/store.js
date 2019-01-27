import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { throttle } from 'lodash';

import rootReducer from './reducers';

// saving collection to local storage for now before backend stuff is ready
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('collection');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('collection', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk),
);

// using throttle per recommendation to not call too often
store.subscribe(throttle(() => {
  saveState({
    collection: store.getState().collection
  });
}, 500));

export default store;
