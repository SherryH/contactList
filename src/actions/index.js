/* @flow */

import { FETCH_CONTACTS, SELECT_CONTACT, SEARCH_CONTACTS } from '../constants';

export const fetchContactsAsync = (path: string) => (dispatch) => {
  fetch(path)
    .then(res => res.json())
    .then((results) => {
      dispatch({
        type: FETCH_CONTACTS,
        payload: results
      });
    });
};

export const selectContact = (id: number) => ({
  type: SELECT_CONTACT,
  payload: id
});

export const searchContacts = (searchText: string) => ({
  type: SEARCH_CONTACTS,
  payload: searchText
});
