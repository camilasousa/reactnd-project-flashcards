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
    navigationOptions: () => ({
      headerTintColor: 'blue',
      headerStyle: {
        backgroundColor: 'blue',
      },
    }),
  },
});

export default MainNavigation;

