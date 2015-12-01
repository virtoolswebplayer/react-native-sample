'use strict';

import React, { Component, StyleSheet, TextInput,Image,PixelRatio,ScrollView,TouchableHighlight } from 'react-native';
import Button from 'react-native-button';
import Animatable,{View,Text} from 'react-native-animatable';
import { Icon } from 'react-native-icons';
import Dimensions from 'Dimensions';
import _ from 'lodash';

const GridData = [
  {name: '产品新闻', icon: 'fontawesome|hacker-news', iconColor: 'gray', action: 'productNews'},
  {name: '排行榜', icon: 'fontawesome|sort-amount-desc', iconColor: 'gray', action: 'leaderBoard'},
  {name: '我的业绩', icon: 'fontawesome|users', iconColor: 'gray', action: 'achievement'},
  {name: '个人信息', icon: 'fontawesome|search', iconColor: 'gray', action: 'profile'},
  {name: '消息中心', icon: 'fontawesome|users', iconColor: 'gray', action: 'message'},
  {name: '信息反馈', icon: 'fontawesome|link', iconColor: 'gray', action: 'feedback'},
];

/**
 * 计算当前屏幕的宽度和高度
 */
const {width,height} = Dimensions.get('window');

export default Master = (backgroundColor = '#fefefe') => class extends Component {

  getInitialState() {
    return {
      currentScreenWidth: width,
      currentScreenHeight: height,
    }
  }

  /**
   * 计算单元格宽度
   */
  calculatedSize() {
    let size = width / 3;
    return {width: size, height: size}
  }

  renderRow() {

    const { actions } = this.props;

    return GridData.map(item => {
        return (
          <TouchableHighlight onPress={actions.routes[item.action]()}>
            <View style={[styles.gridCell,this.calculatedSize()]}>
              <Icon
                name={item.icon}
                size={40}
                color={item.iconColor}
                style={{width:40,height:40,marginBottom:20,}}
              />
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        );
      }
    )
  }

  renderImage() {
    return (
      <View style={{height:200}}>
        <Image
          style={{height: 200,width:width, resizeMode: Image.resizeMode.cover}}
          source={require('../../assets/showNewsImage.jpg')}></Image>
      </View>
    );
  }

  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <ScrollView style={{flex:1}} contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}>
            {this.renderImage()}
            {this.renderRow()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  body: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#efefef',
    height: 60,
  },
  naviItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCenter: {
    padding: 8,
    textAlign: 'center'
  },
  gridCell: {
    backgroundColor: '#efefef',
    width: 100,
    height: 160,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
    marginLeft: -1,
    marginTop: -1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#cecece',
    marginVertical: 10,
  }
});
