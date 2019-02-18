import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function RequestsList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="MessagesList" />
    </View>
  );
}

RequestsList.navigationOptions = {
  drawerLabel: 'Gestion des demandes',
  drawerIcon: ({ tintColor }) => <Icon name="ticket" size={25} color={tintColor} />
};

export default RequestsList;
