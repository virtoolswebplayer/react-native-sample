/**
 * Created by gaoletian on 15/11/24.
 */

var React = require('react-native');
var {StyleSheet,Platform,PixelRatio} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: (Platform.OS === 'ios' ? 40 : 20),
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 60,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
  },
  toggleText: {
    color: 'white',
  },
  sectionHeader: {
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#ccc',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 16,
  },
  animatableName: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  animatable: {
    padding: 20,
    margin: 10,
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },




  item: {
    width: 100,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 20,
  },
});