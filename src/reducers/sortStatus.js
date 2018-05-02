/* @flow */
import { SORT_CONTACTS, ASC, DES } from '../constants';

const sortStatusReducer = (state = '', action) => {
  switch (action.type) {
    case SORT_CONTACTS: {
      switch (state) {
        case ASC:
          return DES;
        case '':
          return ASC;
        default:
          return '';
      }
    }
    default:
      return state;
  }
};

export const getSortStatus = sortStatus => sortStatus;

export default sortStatusReducer;
