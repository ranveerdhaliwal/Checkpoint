import api from 'services/api';

// types
const SEARCH_STARTED = "checkpoint/search/STARTED";
const SEARCH_SUCCEEDED = "checkpoint/search/SUCCEEDED";
const SEARCH_FAILED = "checkpoint/search/FAILED";

const INITIAL_STATE = {
  loading: false,
  results: [],
  error: null
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCEEDED:
      return {
        ...state,
        results: action.payload.results,
        loading: false,
        error: null
      };
    case SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

// Actions

export function searchForGame(searchTerm) {
  return (dispatch) => {
    dispatch(searchStarted());

    api.get(`games/?searchTerm=${searchTerm}`)
      .then(res => {
        dispatch(searchSucceeded(res.data.results));
      })
      .catch (error => {
        dispatch(searchFailed(error.message));
      });
  }
}

export function searchStarted() {
  return {
    type: SEARCH_STARTED,
  }
}

export function searchSucceeded(results) {
  return {
    type: SEARCH_SUCCEEDED,
    payload: {
      results
    }
  }
}

export function searchFailed(error) {
  return {
    type: SEARCH_FAILED,
    payload: {
      error
    }
  }
}
