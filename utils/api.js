import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'Flashcard:decks';


export const submitDeck = ({ deck, key }) =>
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck,
  }));

export const submitQuestion = ({ deckKey, question }) =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      const deck = data[deckKey];
      const questions = deck.questions || [];
      const updatedDeck = {
        ...deck,
        questions: [...questions, question],
      };
      submitDeck({
        deck: updatedDeck,
        key: deckKey,
      });
      return updatedDeck;
    });

export const getDecks = () =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => JSON.parse(decks) || {});
