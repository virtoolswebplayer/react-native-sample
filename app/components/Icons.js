/**
 * Created by gaoletian on 15/12/2.
 */
import React,{ScrollView,Text,View,Component,StyleSheet,PixelRatio} from 'react-native';
import {Icon} from 'react-native-icons';
import Dimensions from 'Dimensions';
import awesome from '../../node_modules/react-native-icons/fonts/fontawesome.json';

const iconNames = Object.keys(awesome);

/**
 * 计算当前屏幕的宽度和高度
 */
const {width} = Dimensions.get('window');

export default class Icons extends Component {

  /**
   * 计算单元格宽度
   */
  calculatedSize() {
    let size = width / 4;
    return {width: size, height: size}
  }

  renderIcons() {
    return iconNames.map(name => {
      return (
        <View style={[styles.gridCell,this.calculatedSize()]}>
          <Icon
            name={'fontawesome|'+name}
            size={width / 10}
            color='black'
            style={styles.icon}
          />
          <Text style={styles.iconText}>{name}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1}} contentContainerStyle={styles.scrollContent}>
          {this.renderIcons()}
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },

  scrollContent: {flexDirection: 'row', flexWrap: 'wrap'},

  gridCell: {
    backgroundColor: '#efefef',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#ddd',
    marginLeft: -1,
    marginTop: -1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {width:width/10,height:width/10,marginBottom:10,},
  iconText: {fontSize:10,textAlign:'center'}
})

