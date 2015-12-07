/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component,Platform } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import * as reducers from '../reducers/index';

const Application = (Platform.OS === 'ios') ? require('./app.ios.js') : require('./app.android.js');


const reducer = combineReducers(reducers);
const store = createStore(reducer);

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Application />}
      </Provider>
    );
  }
}

export default AppContainer;