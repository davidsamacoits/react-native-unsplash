import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Styles from './styles';

import { 
  FEED_ITEM_BASE_HEIGHT,
  FEED_ITEM_FADE_DURATION,
  FEED_ITEM_BLUR_THUMBNAIL,
  TOUCHABLE_ACTIVE_OPACITY,
  LOADING_DEFAULT_DELAY,
 } from '../../config/constants';

 import {
   COLORS
 } from '../../styles/common';

export default class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailOpacity: new Animated.Value(0),
      imageOpacity: new Animated.Value(0),
    };
  }

  onLoad() {
    setTimeout(() => {
      Animated.timing(this.state.imageOpacity, {
        toValue: 1,
        duration: FEED_ITEM_FADE_DURATION,
      }).start();
    }, LOADING_DEFAULT_DELAY);
  }

  onLoadThumbnail() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
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
          activeOpacity={TOUCHABLE_ACTIVE_OPACITY}
        >
          <Animated.View style={[Styles.thumbnailContainer, {height: imageHeight, opacity: this.state.thumbnailOpacity}]}>
            <Animated.Image
              source={{uri: image.thumb}}
              style={[Styles.thumbnail, {height: imageHeight}]}
              blurRadius={FEED_ITEM_BLUR_THUMBNAIL}
              onLoad={this.onLoadThumbnail()}
            />
            <ActivityIndicator size="small" color={COLORS.TRANSPARENT_WHITE} style={Styles.activityIndicatorThumbnail} />          
          </Animated.View>
          <Animated.Image
            source={{uri: image.regular}}
            style={[Styles.detailFullImage, {height: imageHeight, opacity: this.state.imageOpacity}]}
            onLoad={this.onLoad()}         
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