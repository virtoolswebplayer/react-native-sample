/**
 * Created by gaoletian on 15/12/1.
 */
import React,{StyleSheet,View,Text,Component} from 'react-native';

class NaviBar extends Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {
    hide: false
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    height: 30,
    backgroundColor:'black'
  },

  title:{
    color: 'white'
  }
});