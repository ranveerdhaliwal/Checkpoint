import api from 'services/api';

// Types
const SEARCH_STARTED = "checkpoint/search/STARTED";
const SEARCH_SUCCEEDED = "checkpoint/search/SUCCEEDED";
const SEARCH_FAILED = "checkpoint/search/FAILED";
const SEARCH_NEW_PAGE ="checkpoint/search/NEW_PAGE";

const INITIAL_STATE = {
  searchTerm: '',
  rowsPerPage: 10,
  page: 0,
  totalCount: 0,
  loading: false,
  results: [],
  error: null
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_STARTED:
      return Object.assign({}, state, {
        loading: true,
        searchTerm: action.payload.searchTerm,
      });
    case SEARCH_SUCCEEDED:
      let page;
      if (action.payload.results.offset === 0){
        page = 0;
      } else {
        page = action.payload.results.offset / state.rowsPerPage;
      }

      return Object.assign({}, state, {
        results: action.payload.results.results,
        page: page,
        totalCount: action.payload.results.number_of_total_results,
        loading: false,
        error: null
      });
    case SEARCH_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    case SEARCH_NEW_PAGE:
      return Object.assign({}, state, {
        page: action.payload.page,
        loading: true,
      });
    default:
      return state;
  }
}


// Actions

// main action that takes in the search term and calls backend API
// only searches games right now, and search term is the name of the game 
// not making a pun, I literally mean we're searching for games by their name
export function searchForGame({searchTerm, page}) {
  return (dispatch, getState) => {
    const state = getState();

    if (typeof page === 'undefined') {
      page = state.page;
    }

    if (typeof searchTerm === 'undefined'){
      searchTerm = state.search.searchTerm;
    }

    dispatch(searchStarted(searchTerm));

    api.get(`games/?searchTerm=${searchTerm}&page=${page}`)
      .then(res => {
        dispatch(searchSucceeded(res.data));
      })
      .catch (error => {
        dispatch(searchFailed(error.message));
      });
  }
}

export function searchStarted(searchTerm) {
  return {
    type: SEARCH_STARTED,
    payload: {
      searchTerm,
    }
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