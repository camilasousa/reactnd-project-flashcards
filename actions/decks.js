import { submitDeck, getDecks, submitQuestion } from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const LIST_DECKS = 'LIST_DECKS';

const addedDeck = deck => ({
  type: ADD_DECK,
  deck,
});

const listedDecks = decks => ({
  type: LIST_DECKS,
  decks,
});

const updatedDeck = deck => ({
  type: UPDATE_DECK,
  deck,
});


export const addDeck = deck => dispatch =>
  submitDeck({ deck, key: deck.title })
    .then(() => dispatch(addedDeck(deck)))
    .then(() => deck);

export const listDecks = () => dispatch =>
  getDecks()
    .then(decks => dispatch(listedDecks(decks)));

export const addQuestion = (deckKey, question) => dispatch =>
  submitQuestion({ deckKey, question })
    .then(deck => dispatch(updatedDeck(deck)));
