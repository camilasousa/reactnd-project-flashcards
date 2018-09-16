import { TabNavigator } from 'react-navigation';

import AddDeck from '../AddDeck';
import DeckList from '../DeckList';

const Home = TabNavigator({
  Decks: { screen: DeckList },
  'New deck': { screen: AddDeck },
});

export default Home;
