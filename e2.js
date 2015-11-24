/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
ScrollView = createAnimatableComponent(ScrollView);

var COLORS = [
  '#65b237', // green
  '#346ca5', // blue
  '#a0a0a0', // light grey
  '#ffc508', // yellow
  '#217983', // cobolt
  '#435056', // grey
  '#b23751', // red
  '#333333', // dark
  '#ff6821', // orange
  '#e3a09e', // pink
  '#1abc9c', // turquoise
  '#302614', // brown
];

var ANIMATION_TYPES = require('./animDefine');

var Example = React.createClass({
  _animatables: {},

  getInitialState: function() {
    return { duration: 1000, toggledOn: true };
  },

  render: function() {
    var { duration, toggledOn } = this.state;
    var durationSlider;
    if(Platform.OS === 'ios') {
      durationSlider = (
        <View animation="tada" delay={3000}>
          <SliderIOS
            style={styles.slider}
            value={1000}
            onValueChange={duration => this.setState({ duration: Math.round(duration) })}
            maximumValue={2000}
          />
        </View>
      );
    }
    return (
      <View animation="fadeIn" style={styles.container}>
        <Text style={styles.welcome}>Animatable Explorer</Text>
        {durationSlider}
        <TouchableWithoutFeedback onPress={() => this.setState({ toggledOn: !toggledOn })}>
          <View style={styles.toggle} transition="rotate" transitionValue={toggledOn ? '0deg' : '8deg'}>
            <Text style={styles.toggleText} transition="color" transitionValue={toggledOn ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 33, 33, 1)'}>Toggle me!</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text animation="zoomInDown" delay={600} style={styles.instructions}>
          Tap one of the following to animate for {duration} ms
        </Text>

        <ScrollView animation="bounceInUp" duration={800} delay={1400} style={styles.scrollView}>
          <Accordion
            sections={Object.keys(ANIMATION_TYPES)}
            align="center"
            easing="easeInOut"
            renderHeader={section => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section}</Text>
              </View>
            )}
            renderContent={section => ANIMATION_TYPES[section].map((type, i) => (
              <TouchableWithoutFeedback key={i} onPress={() => this._animatables[type][type](duration)}>
                <View ref={component => this._animatables[type] = component} style={[{ backgroundColor: COLORS[i % COLORS.length] }, styles.animatable]}>
                  <Text style={styles.animatableName}>{type}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          />
        </ScrollView>
      </View>
    );
  }
});

var styles = require('./style');

module.exports = Example;