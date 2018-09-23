import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { setLocalNotification } from './utils/notification';

import MainNavigation from './components/MainNavigation';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

export default App;
