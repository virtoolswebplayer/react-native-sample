'use strict';

import React,{
  Image, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, ViewPagerAndroid, ScrollView} from 'react-native';

import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

import {View} from 'react-native-animatable'

const PAGES      = 3;
const BGCOLOR    = ['#fff', '#fff', '#fff'];
const IMAGE_URIS = [
  'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
];

const newsData = {
  n1: [
    '桑兰17年前的摔伤真相大白',
    '桑兰一直指控罗马尼亚体操队的教练',
    '媒体喧哗与著名的“跨国天价官司',
    '宝鸡女子宜家买床褥半夜被熏醒 退货几经周折',
    '桑兰17年前的摔伤真相大白',
    '桑兰一直指控罗马尼亚体操队的教练',
    '媒体喧哗与著名的“跨国天价官司',
  ],
  n2: [
    '第一条',
    '第二条',
    '第三条',
  ],
  n3: [],
}


class Button extends React.Component {

  constructor(props) {
    super(props);

    this._handlePress = () => {
      if (this.props.enabled && this.props.onPress) {
        this.props.onPress();
      }
    }
  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View style={[styles.button, this.props.enabled ? {} : styles.buttonDisabled]}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class SubNaviTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fractionalPosition = (this.props.progress.position + this.props.progress.offset);
    let leftOffset         = fractionalPosition * (width / PAGES);

    return (
      <View style={{height:40, flexDirection:'row',width:width}}>
        <View style={{flex:1,height: 39,alignItems:'center',justifyContent:'center',backgroundColor:'#efefef'}}>
          <Text>新品推荐</Text>
        </View>
        <View style={{flex:1,height: 39,alignItems:'center',justifyContent:'center',backgroundColor:'#efefef'}}>
          <Text>利好消息</Text>
        </View>
        <View style={{flex:1,height: 39,alignItems:'center',justifyContent:'center',backgroundColor:'#efefef'}}>
          <Text>推荐消息</Text>
        </View>
        <View style={[styles.bg,{width:width/3,height:5,top:35,left:leftOffset,backgroundColor:'#FF3366'}]}></View>
      </View>
    )
  }
}

class ProductNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      animationsAreEnabled: true,
      progress: {
        position: 0,
        offset: 0
      }
    }

    this.onPageSelected = (e) => {
      this.setState({page: e.nativeEvent.position});
    };

    this.onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    }


    this.move = (delta)=> {
      var page = this.state.page + delta;
      this.go(page);
    }

    this.go = (page)=> {
      if (this.state.animationsAreEnabled) {
        this.viewPager.setPage(page);
      }

      this.setState({page});
    }

    this.renderNews =()=> {
      return newsData.n1.map(item => {
        return (
          <TouchableOpacity onPress={this.props.actions.routes.newsDetail()}>
            <View style={styles.newsItem}>
              <Text style={styles.textH1}>{item}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
  }



  render() {
    let pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        backgroundColor: BGCOLOR[i % BGCOLOR.length],
        alignItems: 'center',
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
          <ScrollView style={{width:width,height:height,backgroundColor:'#efefef'}}>
            <Image
              style={styles.image}
              source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
            />
            {this.renderNews()}
          </ScrollView>
        </View>
      );
    }
    var { page, animationsAreEnabled } = this.state;
    return (

      <View style={styles.container}>
        <SubNaviTab progress={this.state.progress}/>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
          ref={viewPager => { this.viewPager = viewPager; }}>
          {pages}
        </ViewPagerAndroid>
        <View style={{height:50}}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray'
  },
  buttonDisabled: {
    backgroundColor: 'black',
    opacity: 0.5
  },
  buttonText: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: width,
    height: 200
  },
  likeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    margin: 8,
    padding: 8
  },
  likeContainer: {
    flexDirection: 'row'
  },
  likesText: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'center'
  },
  progressBarContainer: {
    height: 10,
    margin: 10,
    borderColor: '#eeeeee',
    borderWidth: 2
  },
  progressBar: {
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: '#eeeeee'
  },
  viewPager: {
    flex: 1
  },
  autoFit: {
    flex: 1
  },

  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: '#345984'
  },

  naviItem: {
    flex: 1, height: 38, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
    color: 'white',
  },
  naviItemText: {
    fontFamily: 'Avenir Next',
    color: 'gray'
  },

  newsItem: {
    flex: 1,
    width: width, margin: 2.5, backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },

  textH1: {
    fontFamily: 'Avenir Next',
    fontSize: 14,
    color: 'black'
  }
});

export default  ProductNews;