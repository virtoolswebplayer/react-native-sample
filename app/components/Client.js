/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet, Text, View,TextInput,Image,TouchableHighlight } from 'react-native';

import Dimensions from 'Dimensions';

export default class Client extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          客户
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    backgroundColor: '#efefef',
    alignItems:'center',
    flex: 1
  }
});