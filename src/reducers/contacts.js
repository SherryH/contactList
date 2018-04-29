/* @flow */

import { combineReducers } from 'redux';
import { FETCH_CONTACTS } from '../constants';

const byId = (
  state = {
    2: {
      id: 2,
      name: 'Rose'
    },
    1: {
      id: 1,
      name: 'Jack'
    }
  },
  action
) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      const newState = {};
      action.payload.forEach((contact) => {
        newState[contact.id] = contact;
      });
      return newState;
    }
    default:
      return state;
  }
};

const allIds = (state = [2, 1], action) => {
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
