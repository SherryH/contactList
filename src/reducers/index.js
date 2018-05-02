/* @flow */

import { combineReducers } from 'redux';
import contactReducer, * as contacts from './contacts';
import selectedContactId from './selectedContactId';
import searchedContacts from './searchedContacts';
import sortStatusReducer, * as sortStatus from './sortStatus';
import { ASC } from '../constants';

const reducer = combineReducers({
  searchedContacts,
  selectedContactId,
  contacts: contactReducer,
  sortStatus: sortStatusReducer
});

const sortNames = (a, b, currentSortStatus) => {
  const order = currentSortStatus === ASC ? -1 : 1;
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return order;
  if (nameA > nameB) return -1 * order;
  return 0;
};

export const getContacts = (state) => {
  let contactTree;
  const reducerState = state.reducer;
  if (!reducerState.searchedContacts) {
    contactTree = contacts.getContacts(reducerState.contacts);
  }
  contactTree = contacts.getSearchedContacts(reducerState.searchedContacts, reducerState.contacts);

  if (reducerState.sortStatus === '') return contactTree;

  return contactTree.sort((a, b) => sortNames(a, b, reducerState.sortStatus));
};
export const getSelectedContact = state => contacts.getSelectedContact(state.reducer.contacts, state.reducer.selectedContactId);

export const getSortStatus = state => sortStatus.getSortStatus(state.reducer.sortStatus);

export default reducer;
