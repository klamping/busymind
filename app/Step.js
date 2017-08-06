import React, { Component } from 'react';

import {
  StyleSheet,
  View
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#E3E8F8',
    paddingBottom: 10
  },
});