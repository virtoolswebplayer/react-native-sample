import React,{StyleSheet,ScrollView,Image} from 'react-native';
import {View,Text} from 'react-native-animatable';
import Button from 'react-native-button';

let Dimensions = require('Dimensions');
let {width,height} = Dimensions.get('window');

const bg = {
  uri:'http://b.hiphotos.baidu.com/zhidao/pic/item/7aec54e736d12f2e20df7cc74dc2d562843568bb.jpg'
};

class ProductNews extends React.Component {

  render() {
    return (
      <View animation="zoomIn" duration={100} style={styles.container}>
        <Image style={styles.bg} source={bg}/>
        <ScrollView style={styles.autoFit}>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this.props.actions.pop}>
            返回
          </Button>
        </ScrollView>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    alignItems: 'center',
    flex: 1
  },

  autoFit:{
    flex:1
  },

  bg:{
    position:'absolute',
    left:0,
    top:0,
    width:width,
    height:height,
  }
});

export default ProductNews