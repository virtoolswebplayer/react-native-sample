/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component,Platform } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import * as reducers from '../reducers';

import AppIos from './app.ios';
import AppAndroid from './app.android'

var Application = (Platform.OS === 'ios') ? AppIos : AppAndroid

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Application />}
      </Provider>
    );
  }
}