import * as ActionCreators from '../index';
import { SELECT_CONTACT, SEARCH_CONTACTS, SORT_CONTACTS } from '../../constants';

describe('action creators', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('it should create a SELECT_CONTACT action with given id', () => {
    const expectedAction = {
      type: SELECT_CONTACT,
      payload: 100
    };
    expect(ActionCreators.selectContact(100)).toEqual(expectedAction);
  });
  it('it should create a SEARCH_CONTACTS action with given searchText', () => {
    const expectedAction = {
      type: SEARCH_CONTACTS,
      payload: 'Adam Smith'
    };
    expect(ActionCreators.searchContacts('Adam Smith')).toEqual(expectedAction);
  });
  it('it should create a SORT_CONTACTS action', () => {
    const expectedAction = {
      type: SORT_CONTACTS
    };
    expect(ActionCreators.sortContacts()).toEqual(expectedAction);
  });
});
