import configureMockStore from 'redux-mock-store'; // mock store
import thunk from 'redux-thunk';
import { fetchContactsAsync } from '../index';
import { FETCH_CONTACTS } from '../../constants';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('it should create FETCH_CONTACTS action when async call succeed', () => {
    fetch.mockResponseOnce(JSON.stringify(users));
    const store = mockStore({});

    const expectedActions = [
      { type: 'loading-bar/SHOW', payload: { scope: 'default' } },
      { type: 'loading-bar/HIDE', payload: { scope: 'default' } },
      {
        type: FETCH_CONTACTS,
        payload: users
      }
    ];
    return store.dispatch(fetchContactsAsync()).then(() => {
      expect(store.getActions()).toEqual(expect.arrayContaining(expectedActions));
    });
  });
});
