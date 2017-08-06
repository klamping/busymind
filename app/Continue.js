import React, { Component } from 'react';

import {
  Animated,
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

export default class RestartButton extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func
  };

  static defaultProps = {
    text: 'Continue'
  }

  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.container}
          underlayColor="#F2F7FF"
          >
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end'
  },
  text: {
    paddingVertical: 15,
    padding: 30,
    color: '#3E588F',
    fontSize: 20
  }
});