/**
 * Created by gaoletian on 15/11/24.
 */
var React  = require('react-native');
var {
      StyleSheet,
      View,
      Image,
      Text,
      PixelRatio,
      ScrollView,
      } = React;
var Button = require('react-native-button');

var { Icon, } = require('react-native-icons');

var Dimensions = require('Dimensions');
var Layout     = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={[styles.header,{flexDirection:'row',justifyContent:'center'}]}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{alignSelf:'flex-start',color:'white',fontSize:20, marginLeft:10}}>
              订阅
            </Text>
          </View>

          <View style={{width:30,justifyContent:'center'}}>
            <Icon
              name='fontawesome|user'
              size={20}
              color='white'
              style={{width:20,height:20,alignSelf:'flex-end',marginRight:10}}
            />
          </View>
          <View style={{width:30,justifyContent:'center'}}>
            <Icon
              name='fontawesome|user'
              size={20}
              color='white'
              style={{width:20,height:20,alignSelf:'flex-end',marginRight:10}}
            />
          </View>

        </View>
        <View style={styles.body}>
          <ScrollView style={{flex:1}}>
            <View style={{height:150}}>
              <Image
                style={{height: 180,resizeMode: Image.resizeMode.cover}}
                source={{uri: 'http://img.alicdn.com/tps/TB1UQCwKFXXXXa1XVXXXXXXXXXX-770-360.jpg'}}></Image>
            </View>
            <View style={styles.bodyList}>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|file-text'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>今日看点</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|flash'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|fire'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
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
                <Text>今日看点</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|weibo'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|unlink'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
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
                <Text>今日看点</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|tree'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|user-plus'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>添加频道</Text>
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
                <Text>今日看点</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|tree'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|user-plus'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>添加频道</Text>
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
                <Text>今日看点</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|tree'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>美食天地</Text>
              </View>
              <View style={styles.orderItem}>
                <Icon
                  name='fontawesome|user-plus'
                  size={40}
                  color='#ccc'
                  style={{width:40,height:40,marginBottom:20,}}
                />
                <Text>添加频道</Text>
              </View>
            </View>

          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.naviItem}>
              <Text style={styles.textCenter,{color:'red',textAlign:'center',padding:8}}>订阅</Text>
            </View>
            <View style={styles.naviItem}>
              <Icon
                name='fontawesome|file-text'
                size={20}
                color='#ccc'
                style={{width:20,height:20}}
              />
            </View>
            <View style={styles.naviItem}>
              <Text style={styles.textCenter}>玩乐</Text>
            </View>
            <View style={styles.naviItem}>
              <Text style={styles.textCenter}>社区</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
//    flexDirection:'column',
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
    height: 120,
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
  },
});

//var styles = require('./style');

module.exports = Layout;