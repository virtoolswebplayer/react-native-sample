/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet, Text, View,TextInput,Image,TouchableHighlight } from 'react-native';

import Button from 'react-native-button';

import Dimensions from 'Dimensions';

export default class Feedback extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          信息反馈
        </Text>

        <TextInput
          numberOfLines = {6}
          placeholder="请输入您要反馈的信息"
          multiline={true}
          autoFocus={true}>

        </TextInput>

        <Button>
          提交反馈
        </Button>
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