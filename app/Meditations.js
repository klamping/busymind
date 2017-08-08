import React, { Component } from 'react';

import {
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  NavigationActions,
  StackNavigator,
} from 'react-navigation';

import Step from './Step';
import BreathingIndicator from './BreathingIndicator';
import Marquee from './Marquee';
import Continue from './Continue';

export class Breathing extends Component {
  static propTypes = {
    nextScreen: React.PropTypes.string.isRequired,
    navigation: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      breaths: 0
    }

    this.handlePressOut = this.handlePressOut.bind(this);
  }

  handlePressOut = () => {
    let numBreaths = this.state.breaths;

    if(numBreaths < 3) {
      this.setState({breaths: numBreaths + 1});
    } else {
      this.props.navigation.navigate(this.props.nextScreen);
    }
  }

  render() {
    return (
      <Step navigation={this.props.navigation}>
        <View style={styles.marquee}>
          <Marquee>
            <Text>Focus on your breathing.</Text>
            <Text>Hold the blue orb while you breath in.</Text>
            <Text>Release it when you exhale.</Text>
            <Text>Repeat this several times.</Text>
            <Text>As you breath, feel your chest expand and contract. Feel the air move in and out.</Text>
          </Marquee>
        </View>

        <View style={styles.indicator}>
          <BreathingIndicator
            onPressOut={this.handlePressOut} />
        </View>
      </Step>
    );
  }
}


export class Reading extends Component {
  static propTypes = {
    nextScreen: React.PropTypes.string.isRequired,
    navigation: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      showContinue: false
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Step navigation={this.props.navigation}>
        <View style={styles.marquee}>
          <Marquee onRepeat={() => this.setState({showContinue: true})} style={styles.marquee}>
            {this.props.children}
          </Marquee>
        </View>


        <View><Continue onPress={() => navigate(this.props.nextScreen)} isActive={this.state.showContinue} /></View>
      </Step>
    );
  }
}

export class Heartbeat extends Component {
  render() {
    return (
      <Reading nextScreen="Tension" {...this.props}>
        <Text>Now sense your heart beating in your chest.</Text>
        <Text>Feel its steady rhythm.</Text>
        <Text>Anticipate each beat, trying to slow the cadence of your heart.</Text>
      </Reading>
    );
  }
}

export class Tension extends Component {
  render() {
    return (
      <Reading {...this.props}>
        <Text>Slow down. Search your body for tension.</Text>
        <Text>This could be at your shoulders, your back, or your face.</Text>
        <Text>Recognize the tension. Release it, letting your body sink down.</Text>
      </Reading>
    );
  }
}

export class Relaxing extends Component {
  render() {
    return (
      <Reading nextScreen="Listening" {...this.props}>
        <Text>Find where on your body feels most relaxed right now.</Text>
        <Text>Focus on that area, relaxing as deeply as you can.</Text>
        <Text>Sink in to the full weight of your relaxation, letting gravity pull down.</Text>
      </Reading>
    );
  }
}

export class Listening extends Component {
  render() {
    return (
      <Reading nextScreen="Looking" {...this.props}>
        <Text>Turn outward. Open your mind to the sounds around you.</Text>
        <Text>What's the texture of the noise. Is it loud or quiet?</Text>
        <Text>Do the sounds remind you of anything?</Text>
      </Reading>
    );
  }
}

export class Looking extends Component {
  render() {
    return (
      <Reading {...this.props}>
        <Text>Look around you.</Text>
        <Text>Find the colors and patterns hiding in plain sight.</Text>
        <Text>What textures does your eye see?</Text>
        <Text>Observe the intricate details in your everyday world.</Text>
      </Reading>
    );
  }
}

export class Wandering extends Component {
  render() {
    return (
      <Reading nextScreen="Feelings" {...this.props}>
        <Text>Draw inward. Observe your internal dialogue.</Text>
        <Text>Let your thoughts rise up. Observe what they are.</Text>
        <Text>Are your thoughts about yourself, or others?</Text>
        <Text>Are your thoughts critical or judgemental?</Text>
        <Text>Don't be discouraged by your thoughts, just notice what they are.</Text>
      </Reading>
    );
  }
}

export class Feelings extends Component {
  render() {
    return (
      <Reading nextScreen="Rewind" {...this.props}>
        <Text>Observe the feelings your thoughts stir up.</Text>
        <Text>Thoughts often rise out of an underlying emotion: anxiety, hope, love or fear</Text>
        <Text>Observe these feelings, but don't identify with them.</Text>
        <Text>Simply be aware of the play of your consciousness.</Text>
      </Reading>
    );
  }
}

export class Rewind extends Component {
  render() {
    return (
      <Reading {...this.props}>
        <Text>Rewind the past 24 hours. Recall the experiences you've had.</Text>
        <Text>What motivations and intentions drove your actions?</Text>
        <Text>How did your emotions impact your actions, and your experiences change your emotions?</Text>
        <Text>Did your mind create stories based on these experiences, which may or may not be true?</Text>
        <Text>Let the thoughts of your past go. Simply accept what has happened, as it can no longer be changed.</Text>
      </Reading>
    );
  }
}

export class Centering extends Component {
  render() {
    return (
      <Reading nextScreen="Conclude" {...this.props}>
        <Text>Bring your attention back to the present.</Text>
        <Text>Be completely in the "here and now".</Text>
        <Text>Our past is gone, our future is not yet here. We only have this moment we are currently in.</Text>
      </Reading>
    );
  }
}

export class Conclude extends Component {
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
      <Step
        navigation={this.props.navigation}
        showRestart={false}>
        <View style={styles.ending}>
          <Text style={styles.endingText}>You are here, alive and breathing.</Text>
          <Text style={styles.endingText}>When ready, return to your day in your own time.</Text>
        </View>

        <View>
          <TouchableOpacity onPress={this.reset} activeOpacity={0.7} style={styles.conclude}>
            <Text style={styles.concludeText}>Conclude the Session</Text>
          </TouchableOpacity>
        </View>
      </Step>
    );
  }
}
const styles = StyleSheet.create({
  marquee: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
    paddingHorizontal: 20
  },
  indicator: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ending: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  endingText: {
    fontSize: 22,
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: '#203562',
    textAlign: 'center'
  },
  conclude: {
    backgroundColor: '#203562',
    padding: 20,
  },
  concludeText: {
    fontSize: 20,
    color: '#F2F7FF',
    textAlign: 'center'
  }
});