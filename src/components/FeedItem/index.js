import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Styles from './styles';

import { 
  FEED_ITEM_BASE_HEIGHT,
  FEED_ITEM_FADE_DURATION,
  FEED_ITEM_BLUR_THUMBNAIL,
 } from '../../config/constants';

export default class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailOpacity: new Animated.Value(1),
    };
  }

  onLoad() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: FEED_ITEM_FADE_DURATION,
    }).start();
  }

  render() {
    const { image, author, dimensions, onPress } = this.props;
    const imageHeight = FEED_ITEM_BASE_HEIGHT*(dimensions.height/dimensions.width);
    return (
      <View>
        <TouchableOpacity 
          onPress={onPress}
          style={[Styles.imageContainer, {height: imageHeight}]}
        >
          <Animated.Image
            source={{uri: image.regular}}
            style={[Styles.image, {height: imageHeight}]}
            onLoad={this.onLoad()}
          />
          <Animated.Image
            source={{uri: image.thumb}}
            style={[Styles.thumbnail, {height: imageHeight, opacity: this.state.thumbnailOpacity}]}
            blurRadius={FEED_ITEM_BLUR_THUMBNAIL}
          />
        </TouchableOpacity>
        <View>
          <Text>
            {author}
          </Text>
        </View>
      </View>
    );
  }
}