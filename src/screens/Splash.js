import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import { get } from '../utils/storage';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  async componentDidMount() {
    const auth = await get('auth:login');
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      if (!auth) {
        navigate('Auth');
      } else {
        navigate('Dashboard');
      }
    }, 2000);
  }

  onLoad() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          onLoad={this.onLoad.bind(this)}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1]
                  })
                }
              ]
            }
          ]}
          source={require('../img/logo.png')}
          resizeMode="center"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
    padding: 10
  }
});
