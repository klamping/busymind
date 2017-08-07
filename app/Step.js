import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import RestartButton from './RestartButton';

export default class Step extends Component {
  static propTypes = {
    showRestart: React.PropTypes.bool,
    navigation: React.PropTypes.object.isRequired,
  };

  static defaultProps = {
    showRestart: true
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.showRestart && <RestartButton navigation={this.props.navigation} />}

        {this.props.children}
      </View>
    );
  }
}

let dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height,
    width: dimensions.width,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#E3E8F8'
  },
});
