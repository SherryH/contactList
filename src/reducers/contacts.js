/* @flow */

import { combineReducers } from 'redux';
import { FETCH_CONTACTS, SEARCH_CONTACTS } from '../constants';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      const newState = {};
      action.payload.forEach((contact) => {
        newState[contact.id] = contact;
      });
      return newState;
    }
    case SEARCH_CONTACTS: {
      return state;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      return action.payload.map(contact => contact.id);
    }
    default:
      return state;
  }
};

const contactReducer = combineReducers({ byId, allIds });

export default contactReducer;

export const getContacts = contacts => contacts.allIds.map(id => contacts.byId[id]);
export const getSelectedContact = (contacts, selectedContactId) => contacts.byId[selectedContactId];
export const getSearchedContacts = (searchedContact, contacts) =>
  getContacts(contacts).filter(contact => contact.name.toUpperCase().includes(searchedContact.toUpperCase()));
