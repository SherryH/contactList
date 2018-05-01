/* @flow */
import { SELECT_CONTACT } from '../constants';

type actionProp = {
  type: string,
  payload: number
};

const selectedContactId = (state: number = 1, action: actionProp) => {
  switch (action.type) {
    case SELECT_CONTACT:
      return action.payload;
    default:
      return state;
  }
};
export default selectedContactId;
