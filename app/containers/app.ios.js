/**
 * Created by gaoletian on 15/11/25.
 */
'use strict';

import React, { Component, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';
import Detail from '../components/Detail';
import SignIn from '../components/SignIn.ios';

import Master from '../components/Master';

import ProductNews from '../components/ProductNews';
import Leaderboard from '../components/Leaderboard';
import Achievement from '../components/Achievement';
import Profile from '../components/Profile';
import Message from '../components/Message';
import Feedback from '../components/Feedback';

import Client from '../components/Client';
import Trainning from '../components/Trainning';
import ShowDownload from '../components/ShowDownload';

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#fff', // back button color
  navTint: '#f21b1b',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

const assets = {
  'logo': require('../../assets/logo.png'),
  'home': require('../../assets/tab1.png'),
  'calendar': require('../../assets/tab2.png'),
  'video': require('../../assets/tab3.png'),
  'profile': require('../../assets/tab4.png'),
};

class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />

        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true} />

        <Route name="leaderBoard" component={Leaderboard} title="排行榜"/>
        <Route name="productNews" component={ProductNews} title="产品新闻"/>
        <Route name="achievement" component={Achievement} title="我的业绩"/>
        <Route name="profile" component={Profile} title="个人信息"/>
        <Route name="message" component={Message} title="消息中心"/>
        <Route name="feedback" component={Feedback} title="信息反馈"/>

        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab1" component={Master('#111')} title="我和微金所" tabItem={{icon: assets['home'], title: '我和微金所'}} />
          <Route name="tab2" component={Client} title="客户" tabItem={{icon: assets['calendar'], title: '客户'}} />
          <Route name="tab3" component={Trainning} title="培训" tabItem={{icon: assets['video'], title: '培训'}} />
          <Route name="tab4" component={ShowDownload} title="展业" tabItem={{icon: assets['profile'], title: '展业'}} />
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);