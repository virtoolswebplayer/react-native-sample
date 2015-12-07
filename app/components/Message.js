/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet, Text, View,TextInput,Image,TouchableHighlight,PixelRatio } from 'react-native';

import Dimensions from 'Dimensions';

const Screen = Dimensions.get('window');

class Message extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          消息中心
        </Text>

        <View style={{borderWidth:1/PixelRatio.get(),borderColor:'#ccc', marginBottom:20, width:Screen.width-20,backgroundColor:'white'}}>
          <Text style={{margin:10}}>
            号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中
          </Text>
        </View>

        <View style={{borderWidth:1/PixelRatio.get(),borderColor:'#ccc', marginBottom:20, width:Screen.width-20,backgroundColor:'white'}}>
          <Text style={{margin:10}}>
            号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中号外号外: 中
          </Text>
        </View>
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

export default Message;