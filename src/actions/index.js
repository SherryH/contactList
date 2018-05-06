/* @flow */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { FETCH_CONTACTS, SELECT_CONTACT, SEARCH_CONTACTS, SORT_CONTACTS } from '../constants';

export const fetchContactsAsync = (path: string) => (dispatch) => {
  dispatch(showLoading());
  fetch(path)
    .then(res => res.json())
    .then((results) => {
      dispatch(hideLoading());
      dispatch({
        type: FETCH_CONTACTS,
        payload: results
      });
    })
    .catch((error) => {
      console.error('Fetch Data Error', error);
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

export const sortContacts = () => ({
  type: SORT_CONTACTS
});
