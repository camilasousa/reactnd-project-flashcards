import { combineReducers } from 'redux';

import { ADD_DECK } from '../actions/decks';

const decksById = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    default :
      return state;
  }
};

export default combineReducers({
  decksById,
});
