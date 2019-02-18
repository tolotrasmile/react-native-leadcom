import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Stat() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Stat" />
    </View>
  );
}

Stat.navigationOptions = {
  drawerLabel: 'Statistiques de campagne',
  drawerIcon: ({ tintColor }) => <Icon name="bar-chart" size={25} color={tintColor} />
};

export default Stat;
