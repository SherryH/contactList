/* @flow */
import { SEARCH_CONTACTS } from '../constants';

const searchedContacts = (state = '', action) => {
  switch (action.type) {
    case SEARCH_CONTACTS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default searchedContacts;
