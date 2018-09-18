import { StackNavigator } from 'react-navigation';

import Home from '../Home';
import DeckView from '../DeckView';
import AddQuestion from '../AddQuestion';


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
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: () => ({
      headerTintColor: 'blue',
      headerTitle: 'Add question',
    }),
  },
});

export default MainNavigation;

