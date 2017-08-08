import React, { Component } from 'react';

import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Easing,
  TouchableWithoutFeedback
} from 'react-native';

import Svg, { Circle, RadialGradient, Stop, Defs } from 'react-native-svg';

let AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default class BreathingIndicator extends Component {
  static propTypes = {
    r: React.PropTypes.number,
    onPressIn: React.PropTypes.func,
    onPressOut: React.PropTypes.func,
  };

  static defaultProps = {
    r: 90
  }

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.95,
      r: new Animated.Value(this.props.r)
    };

    this.state.r.addListener( (circleRadius) => {
      if (this._myCircle) {
        this._myCircle.setNativeProps({ r: circleRadius.value.toString() });
      }
    });

    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
  }

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation() {
    let maxSize = this.props.r + (this.props.r * .3);
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.r, { toValue: maxSize, easing: Easing.easeInOut, duration: 4000 }),
        Animated.timing(this.state.r, { toValue: this.props.r, easing: Easing.easeInOut, duration: 4000 })
      ])
    ).start();
  }

  onPressIn() {
    if (this.props.onPressIn) {
      this.props.onPressIn(e);
    }

    this.setState({opacity: 1}),

    Animated.timing(this.state.r, { toValue: this.props.r * 2, easing: Easing.easeIn, duration: 4000 }).start();
    return true;
  }

  onPressOut(e) {
    if (this.props.onPressOut) {
      this.props.onPressOut(e);
    }

    this.setState({opacity: .95});

    Animated.timing(this.state.r, { toValue: this.props.r, easing: Easing.easeOutBack, duration: 4000 }).start(event => {
      if (event.finished) {
        this.runAnimation();
      }
    })
    return true;
  }

  render() {
    let svgSize = this.props.r * 4;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        <Svg
          width={svgSize} height={svgSize}
          opacity={this.state.opacity}
        >
          <Defs>
              <RadialGradient id="grad" x1="0" y1="0" x2="0" y2="0">
                  <Stop offset="0.1" stopColor="#203562" stopOpacity="1" />
                  <Stop offset="0.4" stopColor="#3E588F" stopOpacity="1" />
                  <Stop offset="0.6" stopColor="#3E588F" stopOpacity=".85" />
                  <Stop offset="1" stopColor="#E3E8F8" stopOpacity=".05" />
              </RadialGradient>
          </Defs>
          <AnimatedCircle
            cx={svgSize/2}
            cy={svgSize/2}
            fill="url(#grad)"
            r={this.props.r}
            ref={ ref => this._myCircle = ref }
          />
        </Svg>
      </TouchableWithoutFeedback>
    );
  }
}

AppRegistry.registerComponent('BreathingIndicator', () => BreathingIndicator);
