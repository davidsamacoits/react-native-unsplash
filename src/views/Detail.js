import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from '../styles/app';

export default class Detail extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Detail
        </Text>
      </View>
    );
  }
}