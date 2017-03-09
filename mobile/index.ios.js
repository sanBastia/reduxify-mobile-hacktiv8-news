
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {
  AppRegistry
} from 'react-native';
import thunk from 'redux-thunk'
import App from './src/app'

import rootReducers from './src/reducers'

const createStoreMiddleware = applyMiddleware(thunk)(createStore)

export default class mobile extends Component {


  render() {

    return (
      <Provider store={createStoreMiddleware(rootReducers)}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
