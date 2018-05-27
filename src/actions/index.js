/* @flow */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { FETCH_CONTACTS, SELECT_CONTACT, SEARCH_CONTACTS, SORT_CONTACTS } from '../constants';

const getAsync = path =>
  new Promise((resolve, reject) => {
    fetch(path)
      .then(res => res.json())
      .then(results => resolve(results))
      .catch((error) => {
        console.error('Fetch Data Error', error);
        reject(error);
      });
  });

export const fetchContactsAsync = () => (dispatch) => {
  dispatch(showLoading());
  return getAsync('http://jsonplaceholder.typicode.com/users').then((results) => {
    dispatch(hideLoading());
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

export const sortContacts = () => ({
  type: SORT_CONTACTS
});
