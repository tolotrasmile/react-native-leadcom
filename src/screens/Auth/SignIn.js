import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <Text>SignIn</Text>
        <Image source={require('../../img/logo.jpeg')} />
      </View>
    );
  }
}
