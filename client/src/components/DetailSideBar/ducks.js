import api from 'services/api';

// Types
const DETAIL_REQUEST_STARTED = "checkpoint/sidebar/STARTED";
const DETAIL_REQUEST_SUCCEEDED = "checkpoint/sidebar/SUCCEEDED";
const DETAIL_REQUEST_FAILED = "checkpoint/sidebar/FAILED";
const SET_DETAIL_GAME = "checkpoint/sidebar/SET_DETAIL_GAME";
const TOGGLE_SIDEBAR ="checkpoint/sidebar/TOGGLE_SIDEBAR";

const INITIAL_STATE = {
  open: false,
  loading: false,
  currentGameID: null,
  results: {},
  error: null
};

export default function detailSideBarReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case DETAIL_REQUEST_STARTED:
      return Object.assign({}, state, {
        loading: true,
        open: true,
      });
    case DETAIL_REQUEST_SUCCEEDED:

      const guid = action.payload.results.results.guid;

      const results = Object.assign({}, state.results, { 
        [guid]: action.payload.results.results
      });
      return Object.assign({}, state, {
        results: results,
        currentGameID: guid,
        loading: false,
        error: null
      });
    case DETAIL_REQUEST_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    case SET_DETAIL_GAME:
      return Object.assign({}, state, {
        currentGameID: action.payload.guid,
        open: true,
      });
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}


// Actions

export function getGameDetails(gameID) {
  return (dispatch, getState) => {
    const state = getState();

    // if we got the details for the game already then 
    // just update the current game id so we show those details
    if (gameID in state.detail.results) {
      dispatch(setDetailGame(gameID));

    } else {
      
      // otherwise we need to call the api to actually get the game details
      dispatch(detailRequestStarted());

      api.get(`games/${gameID}/`)
      .then(res => {
        dispatch(detailRequestSucceeded(res.data));
      })
      .catch (error => {
        dispatch(detailRequestFailed(error.message));
      });
    }
    
  }
}

export function setDetailGame(guid) {
  return {
    type: SET_DETAIL_GAME,
    payload: {
      guid
    }
  }
}

export function toggleSidebar(){
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function detailRequestStarted() {
  return {
    type: DETAIL_REQUEST_STARTED,
  }
}

export function detailRequestSucceeded(results) {
  return {
    type: DETAIL_REQUEST_SUCCEEDED,
    payload: {
      results
    }
  }
}

export function detailRequestFailed(error) {
  return {
    type: DETAIL_REQUEST_FAILED,
    payload: {
      error
    }
  }
}