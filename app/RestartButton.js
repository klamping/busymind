import React, { Component } from 'react';

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

import {
  NavigationActions
} from 'react-navigation';

export default class RestartButton extends React.Component {
  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
  }

  reset() {
    let navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.button}>
        <TouchableHighlight onPress={this.reset} underlayColor="white">
          <View>
            <Text style={styles.buttonText}>Restart</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  buttonText: {
    backgroundColor: '#FFF',
    padding: 10,
    paddingLeft: 20,
    color: '#3E588F'
  }
});
