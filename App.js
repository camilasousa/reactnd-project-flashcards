import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { TabNavigator } from 'react-navigation';
import thunk from 'redux-thunk';

import reducer from './reducers';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';

const Tabs = TabNavigator({
  Decks: { screen: DeckList },
  'New deck': { screen: AddDeck },
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const FlashcardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <FlashcardStatusBar
        backgroundColor="blue"
      />
      <Tabs />
    </View>
  </Provider>
);

export default App;
