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
import Master from '../components/Master';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import Leaderboard from '../components/Leaderboard';

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
  navTint: 'red',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

const assets = {
  'calendar': require('../../assets/thin-0021_calendar_month_day_planner.png'),
  'home': require('../../assets/thin-0046_home_house.png'),
  'logo': require('../../assets/logo.png'),
  'profile': require('../../assets/thin-0091_file_profile_user_personal.png'),
  'video': require('../../assets/thin-0592_tv_televison_movie_news.png'),
};

class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />

        <Route name="home" component={Home} type="myhome" title="首屏"/>
        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true} />
        <Route name="detail" component={Detail} hideNavBar={true}/>
        <Route name="leaderBoard" component={Leaderboard} title="排行榜" hideNavBar={true}/>

        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab1" component={Master('#111')} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} hideNavBar={true}/>
          <Route name="tab2" component={Master('#222')} title="Calendar" tabItem={{icon: assets['calendar'], title: 'Calendar'}} hideNavBar={true}/>
          <Route name="tab3" component={Master('#333')} title="Video" tabItem={{icon: assets['video'], title: 'Video'}} hideNavBar={true}/>
          <Route name="tab4" component={Master('#444')} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} hideNavBar={true}/>
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);