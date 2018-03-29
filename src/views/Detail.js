import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Styles from '../styles/app';

import { 
  DETAIL_FADE_DURATION,
  DETAIL_BLUR_THUMBNAIL,
  LOADING_DEFAULT_DELAY,
 } from '../config/constants';

 import {
  COLORS,
 } from '../styles/common';

export default class Detail extends Component {
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
        duration: DETAIL_FADE_DURATION,
      }).start();
    }, LOADING_DEFAULT_DELAY);
    
  }

  onLoadThumbnail() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: DETAIL_FADE_DURATION,
    }).start();
  }

  render() {
    const item = this.props.navigation.state.params.item;
    return (
      <View style={[Styles.detailContainer, { backgroundColor: item.color }]}>
        <Animated.View style={[Styles.detailThumbnailContainer, {opacity: this.state.thumbnailOpacity}]}>
          <Animated.Image
            source={{uri: item.urls.thumb}}
            style={Styles.detailThumbnail}
            blurRadius={DETAIL_BLUR_THUMBNAIL}
            onLoad={this.onLoadThumbnail()}
          />
          <ActivityIndicator size="small" color={COLORS.TRANSPARENT_WHITE} style={Styles.activityIndicatorThumbnail} />          
        </Animated.View>
        <Animated.Image
          source={{uri: item.urls.full}}
          style={[Styles.detailFullImage, {opacity: this.state.imageOpacity}]}
          onLoad={this.onLoad()}         
        />
      </View>
    );
  }
}