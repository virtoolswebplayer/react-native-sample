'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default Master = (backgroundColor = '#fefefe') => class extends Component {
  render() {
    const { actions, assets } = this.props;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <TouchableHighlight onPress={actions.routes.detail()}>
          <Image style={styles.image} source={assets.logo} />
        </TouchableHighlight>
        <Text style={styles.text} onPress={actions.routes.detail()}>Push detail view</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 200,
  },
  text: {
    color: '#FFF',
  },
});
