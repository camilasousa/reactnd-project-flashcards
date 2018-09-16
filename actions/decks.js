import { submitDeck, getDecks } from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const LIST_DECKS = 'LIST_DECKS';

const addedDeck = deck => ({
  type: ADD_DECK,
  deck,
});

const listedDecks = decks => ({
  type: LIST_DECKS,
  decks,
});


export const addDeck = deck => dispatch =>
  submitDeck({ deck, key: deck.title })
    .then(() => dispatch(addedDeck(deck)));

export const listDecks = () => dispatch =>
  getDecks()
    .then(decks => dispatch(listedDecks(decks)));
