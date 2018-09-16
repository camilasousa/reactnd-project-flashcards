import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

import AddDeck from '../AddDeck';
import DeckList from '../DeckList';


const HomeTabs = TabNavigator({
  Decks: { screen: DeckList },
  'New deck': { screen: AddDeck },
}, {
  initialScreen: 'Decks',
  tabBarOptions: { style: { paddingTop: Constants.statusBarHeight } },
});

export default HomeTabs;
