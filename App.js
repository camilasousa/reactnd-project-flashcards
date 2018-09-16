import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import MainNavigation from './components/MainNavigation';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;
