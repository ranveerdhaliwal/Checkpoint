
// Types
const COLLECTION_INPROGRESS_SET = "checkpoint/collection/inprogress/SET";
const COLLECTION_INPROGRESS_ADD = "checkpoint/collection/inprogress/ADD";
const COLLECTION_INPROGRESS_REMOVE = "checkpoint/collection/inprogress/REMOVE";

const COLLECTION_COMPLETED_SET = "checkpoint/collection/completed/SET";
const COLLECTION_COMPLETED_ADD = "checkpoint/collection/completed/ADD";
const COLLECTION_COMPLETED_REMOVE = "checkpoint/collection/completed/REMOVE";

const COLLECTION_BACKLOG_SET = "checkpoint/collection/backlog/SET";
const COLLECTION_BACKLOG_ADD = "checkpoint/collection/backlog/ADD";
const COLLECTION_BACKLOG_REMOVE = "checkpoint/collection/backlog/REMOVE";

const INITIAL_STATE = {
  inprogress: [],
  completed: [],
  backlog: [],
};

// Reducers

// splitting each lists of games into their own reducers
export default function collectionReducer(state = INITIAL_STATE, action) {
  return {
    completed: collectionCompletedReducer(state.completed, action),
    inprogress: collectionInProgressReducer(state.inprogress, action),
    backlog: collectionBacklogReducer(state.backlog, action)
  }
}

function collectionCompletedReducer(state = [], action) {
  switch(action.type) {
    case COLLECTION_COMPLETED_ADD:
      return [action.payload.game, ...state];

    case COLLECTION_COMPLETED_SET:
      return action.payload.results;

    case COLLECTION_COMPLETED_REMOVE:
      return filterGameOut(state, action.payload.game);

    default: 
      return state;
  }
}

function collectionInProgressReducer(state = [], action) {
  switch(action.type) {
    case COLLECTION_INPROGRESS_ADD:
      return [action.payload.game, ...state];

    case COLLECTION_INPROGRESS_SET:
      return action.payload.results;

    case COLLECTION_INPROGRESS_REMOVE:
      return filterGameOut(state, action.payload.game);

    default: 
      return state;
  }
}

function collectionBacklogReducer(state = [], action) {
  switch(action.type) {
    case COLLECTION_BACKLOG_ADD:
      return [action.payload.game, ...state];

    case COLLECTION_BACKLOG_SET:
      return action.payload.results;

    case COLLECTION_BACKLOG_REMOVE:
      return filterGameOut(state, action.payload.game);

    default: 
      return state;
  }
}


// Helper functions for above reducers
const filterGameOut = (list, gameToRemove) => {
  const newList = list.filter(game => {
    return game.id !== gameToRemove.id
  });
  return newList;
}

// Actions

export function collectionInProgressSet(results) {
  return {
    type: COLLECTION_INPROGRESS_SET,
    payload: {
      results
    }
  }
}

export function collectionCompletedSet(results) {
  return {
    type: COLLECTION_COMPLETED_SET,
    payload: {
      results
    }
  }
}

export function collectionBacklogSet(results) {
  return {
    type: COLLECTION_BACKLOG_SET,
    payload: {
      results
    }
  }
}

export function collectionInProgressAdd(game) {
  return {
    type: COLLECTION_INPROGRESS_ADD,
    payload: {
      game
    }
  }
}
export function collectionCompletedAdd(game) {
  return {
    type: COLLECTION_COMPLETED_ADD,
    payload: {
      game
    }
  }
}

export function collectionBacklogAdd(game) {
  return {
    type: COLLECTION_BACKLOG_ADD,
    payload: {
      game
    }
  }
}


export function collectionInProgressRemove(game) {
  return {
    type: COLLECTION_INPROGRESS_REMOVE,
    payload: {
      game
    }
  }
}
export function collectionCompletedRemove(game) {
  return {
    type: COLLECTION_COMPLETED_REMOVE,
    payload: {
      game
    }
  }
}

export function collectionBacklogRemove(game) {
  return {
    type: COLLECTION_BACKLOG_REMOVE,
    payload: {
      game
    }
  }
}
