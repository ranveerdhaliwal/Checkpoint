
import collectionReducer, { 
  collectionInProgressSet, collectionCompletedSet, collectionBacklogSet,
  collectionInProgressAdd, collectionCompletedAdd, collectionBacklogAdd, 
  collectionInProgressRemove, collectionCompletedRemove, collectionBacklogRemove,
} from './ducks';


const initialState = {
    inprogress: [],
    completed: [],
    backlog: [],
  };

  const inprogressData = [
    {
      id: 1, 
      name: "Halo: Combat Evolved",
    },
    {
      id: 2, 
      name: "Halo 2",
    },
  ];

  const backlogData = [
    {
      id: 3, 
      name: "Battlefield V",
    },
    {
      id: 4, 
      name: "Super Smash Bros. Ultimate",
    },
  ];

  const completeData = [
    {
      id: 5, 
      name: "Kingdom Hearts",
    },
    {
      id: 6, 
      name: "Kingdom Hearts 2",
    },
  ];
  


describe('Collection redux ducks tests', () => {


  it('returns default state in the reducer', () => {
    expect(collectionReducer(undefined, {})).toEqual(initialState);
  });

  it('in progress set correctly', () => {
    const action = collectionInProgressSet(inprogressData);

    expect(collectionReducer(initialState, action))
      .toEqual({
        ...initialState,
        inprogress: inprogressData,
      });
  });


  it('completed set correctly', () => {
    const action = collectionCompletedSet(completeData);

    expect(collectionReducer(initialState, action))
      .toEqual({
        ...initialState,
        completed: completeData,
      });
  });


  it('backlog set correctly', () => {
    const action = collectionBacklogSet(backlogData);

    expect(collectionReducer(initialState, action))
      .toEqual({
        ...initialState,
        backlog: backlogData,
      });
  });

  it('backlog adds and removes correctly', () => {
    const game = {
      id: Math.random(),
      name: "Kingdom Hearts 3",
    };

    const addAction = collectionBacklogAdd(game);

    expect(collectionReducer(initialState, addAction))
      .toEqual({
        ...initialState,
        backlog: [game],
      });

    const removeAction = collectionBacklogRemove(game);
    expect(collectionReducer(initialState, removeAction))
      .toEqual({
        ...initialState,
        backlog: [],
      });

  });


  it('completed adds and removes correctly', () => {
    const game = {
      id: Math.random(),
      name: "Kingdom Hearts 3",
    };

    const addAction = collectionCompletedAdd(game);

    expect(collectionReducer(initialState, addAction))
      .toEqual({
        ...initialState,
        completed: [game],
      });

    const removeAction = collectionCompletedRemove(game);
    expect(collectionReducer(initialState, removeAction))
      .toEqual({
        ...initialState,
        completed: [],
      });

  });

  it('inprogress adds and removes correctly', () => {
    const game = {
      id: Math.random(),
      name: "Kingdom Hearts 3",
    };

    const addAction = collectionInProgressAdd(game);

    expect(collectionReducer(initialState, addAction))
      .toEqual({
        ...initialState,
        inprogress: [game],
      });

    const removeAction = collectionInProgressRemove(game);
    expect(collectionReducer(initialState, removeAction))
      .toEqual({
        ...initialState,
        inprogress: [],
      });

  });


});
