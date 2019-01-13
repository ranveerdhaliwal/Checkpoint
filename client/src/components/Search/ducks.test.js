
import { mockStore, } from 'test/utils/mockStore';

import searchReducer, { searchForGame, searchStarted, searchSucceeded } from './ducks';

import mockAxios from 'axios';

import PLACEHOLDER_DATA from 'test/PLACEHOLDER_DATA';

describe('Search redux ducks tests', () => {

  const initialState = {
    searchTerm: '',
    rowsPerPage: 10,
    page: 0,
    totalCount: 0,
    loading: false,
    results: [],
    error: null
  };

  const searchTerm = 'halo';

  const placeholderData = PLACEHOLDER_DATA.PLACEHOLDER_DATA;

  it('returns default state in the reducer', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it('has loading and search term set after search started', () => {
    expect(searchReducer(initialState, { type: 'checkpoint/search/STARTED', payload: {searchTerm} }))
      .toEqual({
        ...initialState,
        loading: true,
        searchTerm: searchTerm
      });
  });


  it('has correct state search succeeded', () => {
    expect(searchReducer(initialState, { type: 'checkpoint/search/SUCCEEDED', payload: placeholderData.data }))
      .toEqual({
        ...initialState,
        loading: false,
        results: placeholderData.data.results.results,
        page: 0,
        totalCount: 7,
      });
  });

  it('has page set correctly', () => {
    expect(searchReducer(initialState, { type: 'checkpoint/search/NEW_PAGE', payload: {page: 3} }))
      .toEqual({
        ...initialState,
        page: 3,
        loading: true,
      });
  });

  it('calls search for game dispatch thunk', async () => {
    const store = mockStore({});

    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(placeholderData),
    );

    const searchTerm = 'halo';
    const searchStartedAction = searchStarted(searchTerm);

    const searchSucceedAction = searchSucceeded(placeholderData.data);

    const expectedActions = [
      { type: searchStartedAction.type, payload: searchStartedAction.payload },
      { type: searchSucceedAction.type, payload: searchSucceedAction.payload }
    ];

    await store.dispatch(searchForGame({searchTerm}));

    expect(store.getActions()).toEqual(expectedActions);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

  });

});
