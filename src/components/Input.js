import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends React.Component {
  render() {
    const { style, forwardedRef, ...props } = this.props;
    return (
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#9d9d9d"
        placeholder=""
        autoCorrect={false}
        autoCapitalize="none"
        style={[styles.input, { ...style }]}
        {...props}
        ref={forwardedRef}
      />
    );
  }
}

const RefComponent = Component => {
  const forwardRef = (props, ref) => <Component forwardedRef={ref} {...props} />;
  return React.forwardRef(forwardRef);
};

export default RefComponent(Input);

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    height: 45,
    borderRadius: 6,
    borderWidth: 2,
    paddingLeft: 15,
    borderColor: '#939393',
    backgroundColor: 'white',
    color: 'black',
    width: '100%'
  }
});
