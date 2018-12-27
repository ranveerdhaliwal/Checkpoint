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
      return Object.assign({}, state, {
        results: action.payload.results.results,
        page: action.payload.results.offset / state.rowsPerPage,
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
export function searchForGame(searchTerm) {
  return (dispatch, getState) => {
    const state = getState();
    const page = state.page;

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

// funtion to change pages and get new request
// far from ideal but I couldn't figure out how to reuse the internal logic yet
// will refactor as soon I as I find away
export function searchForGameWithPageChange(page) {
  return (dispatch, getState) => {
    
    dispatch(searchSetPage(page));
    const state = getState();

    const searchTerm = state.search.searchTerm;

    api.get(`games/?searchTerm=${searchTerm}&page=${page}`)
      .then(res => {
        dispatch(searchSucceeded(res.data));
      })
      .catch (error => {
        dispatch(searchFailed(error.message));
      });
  }
}

export function searchSetPage(page) {  
  return {
    type: SEARCH_NEW_PAGE,
    payload: {
      page
    }
  }
}
