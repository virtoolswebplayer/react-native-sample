/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet, Text, View,TextInput,Image,TouchableHighlight } from 'react-native';

import Dimensions from 'Dimensions';

export default class Leaderboard extends Component {

  render() {
    return (
      <View  style={{alignItems:'center'}}>
        <Text>
          排行榜
        </Text>
      </View>
    );
  }
}