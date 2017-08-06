import React, { Component } from 'react';

import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';

import Carousel from 'react-native-looped-carousel';

const { width } = Dimensions.get('window');

export default class Marquee extends React.Component {
  static propTypes = {
    onRepeat: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange = (index) => {
    if ((index === this.props.children.length - 1) && this.props.onRepeat ) {
      setTimeout(this.props.onRepeat, 10)
    }
  }

  render() {
    let words = React.Children.map(this.props.children, function(child, index) {
      return <View style={styles.words}><Text style={styles.word}>{child}</Text></View>
    });

    return (
      <Carousel
        delay={1000}
        autoplay
        style={styles.carousel}
        onAnimateNextPage={this.handlePageChange}
      >
        {words}
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    width: 300,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  words: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  word: {
    fontSize: 22,
    textAlign: 'center',
    color: '#203562'
  },
  bullet: {
    borderColor: '#203562'
  },
  chosenBullet: {
    backgroundColor: '#203562'
  }
});
