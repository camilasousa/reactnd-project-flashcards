import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'Flashcard:decks';


export const submitDeck = ({ deck, key }) =>
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck,
  }));


export const getDecks = () =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse);
