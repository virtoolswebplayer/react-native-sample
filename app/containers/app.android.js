/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet,BackAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar, Route, Router, Schema, TabBar, TabRoute
} from '../libs/react-native-router-redux/index';


import CodePush from 'react-native-code-push';

import Detail from '../components/Detail';
import SignIn from '../components/SignIn.android';

import Master from '../components/Master';

import ProductNews from '../components/ProductNews';
import Leaderboard from '../components/Leaderboard';
import Achievement from '../components/Achievement';
import Profile from '../components/Profile';
import Message from '../components/Message';
import Feedback from '../components/Feedback';

import Client from '../components/Client';
import Training from '../components/Training';
import ShowDownload from '../components/ShowDownload';
import NewsDetail from '../components/NewsDetail';
import IconsPage from '../components/Icons';


const mapStateToProps = state => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions
  }, dispatch),
  dispatch
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#fff', // back button color
  navTint: '#f21b1b',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18
  },
  statusStyle: 'light-content',
  tabBar: TabBar
};

const assets = {
  'logo': require('../../assets/logo.png'),
  'home': require('../../assets/tab1.png'),
  'calendar': require('../../assets/tab2.png'),
  'video': require('../../assets/tab3.png'),
  'profile': require('../../assets/tab4.png')
};

/**
 * 响应手机的返回键
 */
let _actions;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_actions) {
    _actions.pop(); // 回到上一个路由状态


    return true; // 返回true,不退出程序
  }
  return false; // 返回false,退出程序
});

class Application extends Component {

  componentWillMount() {
    _actions = this.props.actions;
  }

  componentWillUnmount() {

  }

  componentDidMount() {
    // 执行热更新
    CodePush.sync()
  }

  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />
        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true}/>
        <Route name="leaderBoard" component={Leaderboard} title="排行榜" hideNavBar={true}/>
        <Route name="productNews" component={ProductNews} title="产品新闻" hideNavBar={true}/>
        <Route name="achievement" component={Achievement} title="我的业绩" hideNavBar={true}/>
        <Route name="profile" component={Profile} title="个人信息" hideNavBar={true}/>
        <Route name="message" component={Message} title="消息中心" hideNavBar={true}/>
        <Route name="feedback" component={Feedback} title="信息反馈" hideNavBar={true}/>
        <Route name="newsDetail" component={NewsDetail} title="新闻页" hideNavBar={true}/>
        <Route name="iconsPage" component={IconsPage} title="新闻页" hideNavBar={true}/>
        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab1" component={Master} title="我和微金所" tabItem={{icon: assets['home'], title: '我和微金所'}}
                 hideNavBar={true}/>
          <Route name="tab2" component={IconsPage} title="客户" tabItem={{icon: assets['calendar'], title: '客户'}}
                 hideNavBar={true}/>
          <Route name="tab3" component={Training} title="培训" tabItem={{icon: assets['video'], title: '培训'}}
                 hideNavBar={true}/>
          <Route name="tab4" component={ShowDownload} title="展业" tabItem={{icon: assets['profile'], title: '展业'}}
                 hideNavBar={true}/>
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);