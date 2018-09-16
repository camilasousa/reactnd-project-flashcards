import { submitDeck } from '../utils/api';

export const ADD_DECK = 'ADD_DECK';

const addedDeck = deck => ({
  type: ADD_DECK,
  deck,
});


export const addDeck = deck => dispatch =>
  submitDeck({ deck, key: deck.title })
    .then(() => dispatch(addedDeck(deck)));
