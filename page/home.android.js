/**
 * Created by gaoletian on 15/11/24.
 */
'use strict';

var React = require('react-native');
var {
      AppRegistry,
      StyleSheet,
      ScrollView,
      Platform,
      SliderIOS,
      TouchableWithoutFeedback,
      PixelRatio,
      } = React;

var { createAnimatableComponent, View, Text } = require('react-native-animatable');
var Accordion = require('react-native-collapsible/Accordion');
ScrollView    = createAnimatableComponent(ScrollView);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

var home = React.createClass({
  render: function () {
    return (

      <View>
        <View>
          <Text>
            我和微金所
          </Text>
        </View>
        <ScrollView animation="bounceInUp" duration={800} delay={1400} style={styles.scrollView}>
        </ScrollView>
        <View></View>
      </View>

    )
  }

});

module.exports = home;