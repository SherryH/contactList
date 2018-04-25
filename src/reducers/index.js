import { FETCH_CONTACTS } from '../constants';

const initialState = [{ name: 'Jake', id: '0' }, { name: 'Rose', id: '1' }];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
