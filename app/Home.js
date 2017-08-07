import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import BreathingIndicator from './BreathingIndicator';
import Marquee from './Marquee';
import Continue from './Continue';

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.intro}>
          <Text style={styles.name}>BusyMind</Text>
          <Text style={styles.tagline}>Mindfulness for your busy life</Text>
        </View>

        <View style={styles.startButtons}>
          <TouchableOpacity onPress={() => navigate('One')} activeOpacity={0.5}>
            <Text style={styles.startButton}>Start 1-minute session</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Five')} activeOpacity={0.5}>
            <Text style={styles.startButton}>Start 5-minute session</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.breathingContainer}>
          <BreathingIndicator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E3E8F8',
    paddingBottom: 30
  },
  intro: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  breathingContainer: {
    position: 'absolute',
    zIndex: -1,
    top: '50%',
    marginTop: -140,
    height: 360,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 36,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#203562'
  },
  tagline: {
    fontSize: 18
  },
  startButtons: {
    marginBottom: 20,
  },
  startButton: {
    color: '#203562',
    fontSize: 21,
    padding: 10,
    marginVertical: 5,
  }
});
