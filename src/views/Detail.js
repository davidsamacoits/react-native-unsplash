import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from '../styles/app';

export default class Detail extends Component {
  render() {
    const item = this.props.navigation.state.params.item;
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          {item.urls.full}
        </Text>
      </View>
    );
  }
}