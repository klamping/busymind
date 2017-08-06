import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {Breathing, Heartbeat, Relaxing, Tension, Listening, Looking, Wandering, Feelings, Rewind, Centering, Conclude} from './Meditations';
import HomeScreen from './Home';

const cloneWithProps = function (Component, customProps) {
  return class extends React.Component {
    render () {
      return <Component {...customProps} {...this.props} />
    }
  }
}

export let One = StackNavigator({
  Breathing: { screen: cloneWithProps(Breathing, {nextScreen: 'Tension'}) },
  Tension: { screen: Tension },
  Listening: { screen: Listening },
  Looking: { screen: cloneWithProps(Looking, {nextScreen: 'Conclude'}) },
  Conclude: { screen: Conclude },
  Home: { screen: HomeScreen },
}, {
  headerMode: 'none'
});

export let Five = StackNavigator({
  Breathing: { screen: cloneWithProps(Breathing, {nextScreen: 'Heartbeat'}) },
  Heartbeat: { screen: Heartbeat },
  Tension: { screen: cloneWithProps(Tension, {nextScreen: 'Relaxing'}) },
  Relaxing: { screen: Relaxing },
  Listening: { screen: Listening },
  Looking: { screen: cloneWithProps(Looking, {nextScreen: 'Wandering'}) },
  Wandering: { screen: Wandering },
  Feelings: { screen: Feelings },
  Rewind: { screen: cloneWithProps(Rewind, {nextScreen: 'BreathingTwo'}) },
  BreathingTwo: { screen: cloneWithProps(Breathing, {nextScreen: 'Centering'}) },
  Centering: { screen: Centering },
  Conclude: { screen: Conclude },
  Home: { screen: HomeScreen },
}, {
  headerMode: 'none'
});
