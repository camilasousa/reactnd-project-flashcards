import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import Home from './components/Home';

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
      <Home />
    </View>
  </Provider>
);

export default App;
