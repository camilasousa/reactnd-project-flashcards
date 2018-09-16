import { StackNavigator } from 'react-navigation';

import Home from '../Home';
import DeckView from '../DeckView';


const MainNavigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'blue',
      headerTitle: navigation.state.params.deck.title,
    }),
  },
});

export default MainNavigation;

