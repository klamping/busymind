import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

import {
  NavigationActions,
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './Home'

class Start extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Five Minute Start</Text>
        <Button
          onPress={() => navigate('Middle')}
          title="Next"
          />
      </View>
    );
  }
}

class Middle extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Middle</Text>
        <Button
          onPress={() => navigate('End')}
          title="Next"
          />
      </View>
    );
  }
}

class End extends React.Component {
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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Five Minute End</Text>
        <Button
          onPress={this.reset}
          title="Home"
          />
      </View>
    );
  }
}

export default Five = StackNavigator({
  Home: { screen: HomeScreen },
  Start: { screen: Start },
  Middle: { screen: Middle },
  End: { screen: End }
}, {
  headerMode: 'none',
  initialRouteName: 'Start',
});
