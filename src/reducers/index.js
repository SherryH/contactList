/* @flow */

import { combineReducers } from 'redux';
import contactReducer, * as contacts from './contacts';
import { FETCH_CONTACTS } from '../constants';

const initialState = [{ name: 'Jake', id: '0' }, { name: 'Rose', id: '1' }];

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      return action.payload;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({ reducer1, contacts: contactReducer });

export const getContacts = state => contacts.getContacts(state.contacts);
export default reducer;
