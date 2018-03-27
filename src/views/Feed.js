import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button  
} from 'react-native';
import Styles from '../styles/app';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Feed extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={Styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Text style={Styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}