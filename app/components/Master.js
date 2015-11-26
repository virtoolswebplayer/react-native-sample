'use strict';

import React, { Component, StyleSheet, TextInput,Image,PixelRatio,ScrollView,TouchableWithoutFeedback } from 'react-native';
import Button from 'react-native-button';
import Animatable,{View,Text} from 'react-native-animatable';
import { Icon } from 'react-native-icons';
import Dimensions from 'Dimensions';

export default Master = (backgroundColor = '#fefefe') => class extends Component {
  render() {


    const { actions } = this.props;

    return (
      <View  style={styles.container}>
        <View animation="fadeIn" duration={500} style={styles.body}>
          <ScrollView style={{flex:1}}>
            <View style={{height:150}}>
              <Image
                style={{height: 300,resizeMode: Image.resizeMode.cover}}
                source={{uri: 'http://img.alicdn.com/tps/TB1UQCwKFXXXXa1XVXXXXXXXXXX-770-360.jpg'}}></Image>
            </View>
            <View style={styles.bodyList}>
              <TouchableWithoutFeedback onPress={actions.routes.productNews()}>
                <View style={styles.orderItem}>
                  <Icon
                    name='fontawesome|hacker-news'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>产品新闻</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={actions.routes.leaderBoard()}>
                <View style={styles.orderItem} ref="view">
                  <Icon
                    name='fontawesome|sort-amount-desc'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>排行榜</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={actions.routes.tabBar.tab1()}>
                <View style={styles.orderItem} ref="view1">
                  <Icon
                    name='fontawesome|users'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>我的业绩</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bodyList}>
              <TouchableWithoutFeedback onPress={actions.routes.tabBar.tab1()}>
                <View style={styles.orderItem}>
                  <Icon
                    name='fontawesome|users'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>个人信息</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={actions.routes.tabBar.tab1()}>
                <View style={styles.orderItem}>
                  <Icon
                    name='fontawesome|search'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>消息中心</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={actions.routes.tabBar.tab1()}>
                <View style={styles.orderItem}>
                  <Icon
                    name='fontawesome|unlink'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>信息反馈</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
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
  header: {
    backgroundColor: '#ff0000',
    height: 40,
    marginTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#efefef',

  },
  footer: {
    backgroundColor: '#efefef',
    height: 60,
  },
  bodyList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  orderItem: {
    backgroundColor: '#efefef',
    flex: 1,
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
