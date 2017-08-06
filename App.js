import { AppRegistry } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './app/Home';
import { One, Five } from './app/Guides';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  One: { screen: One },
  Five: { screen: Five }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

AppRegistry.registerComponent('BusyMindTwoDotOh', () => App);