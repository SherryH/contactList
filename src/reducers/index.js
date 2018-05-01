/* @flow */

import { combineReducers } from 'redux';
import contactReducer, * as contacts from './contacts';
import selectedContactId from './selectedContactId';
import searchedContactsReducer from './searchedContacts';

const reducer = combineReducers({ searchedContacts: searchedContactsReducer, selectedContactId, contacts: contactReducer });

export const getContacts = (state) => {
  if (!state.searchedContacts) {
    return contacts.getContacts(state.contacts);
  }
  return contacts.getSearchedContacts(state.searchedContacts, state.contacts);
};
export const getSelectedContact = state => contacts.getSelectedContact(state.contacts, state.selectedContactId);
export default reducer;
