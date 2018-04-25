import { FETCH_CONTACTS, FETCH_CONTACTS_ASYNC } from '../constants';

export const fetchContactsAsync = path => (dispatch) => {
  fetch(path)
    .then(res => res.json())
    .then((results) => {
      dispatch({
        type: FETCH_CONTACTS,
        payload: results
      });
    });
};
