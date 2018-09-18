import { combineReducers } from 'redux';

import { ADD_DECK, LIST_DECKS, UPDATE_DECK } from '../actions/decks';

const decksById = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
    case UPDATE_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck,
      };
    case LIST_DECKS:
      return action.decks;
    default :
      return state;
  }
};

export default combineReducers({
  decksById,
});
