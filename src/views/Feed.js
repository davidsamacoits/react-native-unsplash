import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import FeedItem from '../components/FeedItem';

import Styles from '../styles/app';

// Mock
const feedMock = require('../assets/mocks/feed.json');

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: {},
    };
  }
  componentDidMount() {
    // --> fetch
    this.setState(prevState => {
      return { ...prevState, feed: feedMock };
    });
  }
  renderFeed() {
    const { feed } = this.state;
    return (
      <FlatList
        ref='feedFlatList'
        data={feed}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <FeedItem
            onPress={() => this.props.navigation.navigate('Detail', {item})}
            image={{
              regular: item.urls.regular,
              thumb: item.urls.thumb,
            }}
            author={item.user.username}
            dimensions={{
              width: item.width,
              height: item.height
            }}
          />
        )}
      />
    )
  }
  render() {
    return (
      <View>
        {this.renderFeed()}
      </View>
    );
  }
}