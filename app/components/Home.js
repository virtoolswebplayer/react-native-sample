/**
 * Created by gaoletian on 15/11/24.
 */

'use strict';

import React, { Component, StyleSheet, TextInput,Image,PixelRatio,ScrollView,TouchableWithoutFeedback } from 'react-native';
import Button from 'react-native-button';
import Animatable,{ View, Text} from 'react-native-animatable';
import { Icon } from 'react-native-icons';
import Dimensions from 'Dimensions';

const assets = {
  'logo': require('../../assets/logo.png')
};

export default class Home extends Component {

  render(){



    const { actions } = this.props;

    return (
      <View style={styles.container}>
        <View animation="fadeInLeftBig" duration={400} style={styles.body}>
          <ScrollView style={{flex:1}}>
            <View style={{height:150}}>
              <Image
                style={{height: 300,resizeMode: Image.resizeMode.cover}}
                source={{uri: 'http://img.alicdn.com/tps/TB1UQCwKFXXXXa1XVXXXXXXXXXX-770-360.jpg'}}></Image>
            </View>
            <View style={styles.bodyList}>
              <TouchableWithoutFeedback onPress={actions.routes.leaderBoard()}>
                <Animatable.View style={styles.orderItem} ref="view">
                  <Icon
                    name='fontawesome|sort-amount-desc'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>排行榜</Text>
                </Animatable.View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={actions.routes.tabBar.tab1()}>
                <Animatable.View style={styles.orderItem} ref="view1">
                  <Icon
                    name='fontawesome|users'
                    size={40}
                    color='#ccc'
                    style={{width:40,height:40,marginBottom:20,}}
                  />
                  <Text>客户</Text>
                </Animatable.View>
              </TouchableWithoutFeedback>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|hacker-news'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>产品新闻</Text>
              </View>
            </View>
            <View style={styles.bodyList}>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|users'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>培训</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|search'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>查询</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|unlink'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>信息反馈</Text>
              </View>
            </View>
            <View style={styles.bodyList}>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|tumblr'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>展业</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|comment'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>联系我们</Text>
              </View>
              <View style={styles.orderItem}>
              </View>
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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ff0000',
    height: 40,
    marginTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#ccc',

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
    backgroundColor: 'white',
    flex: 1,
    height: 160,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#efefef',
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

