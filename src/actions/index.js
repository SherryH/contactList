import { FETCH_CONTACTS } from '../constants';

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

export const dummy = () => {};
