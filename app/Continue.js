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
    onPress: React.PropTypes.func,
    isActive: React.PropTypes.bool,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive) {
      Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 500}).start();
    }
  }

  onPress = (e) => {
    if (this.props.isActive) {
      this.props.onPress(e)
    }
  }

  render() {
    return (
      <Animated.View style={[styles.view, {opacity: this.state.fadeAnim}]}>
        <TouchableHighlight
          onPress={this.onPress}
          style={styles.container}
          underlayColor="#203562"
          >
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E588F',
    padding: 20,
  },
  text: {
    textAlign: 'right',
    color: '#F2F7FF',
    fontSize: 20,
  }
});