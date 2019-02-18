import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function MessagesList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="MessagesList" />
    </View>
  );
}

MessagesList.navigationOptions = {
  drawerLabel: 'Liste des messages',
  drawerIcon: ({ tintColor }) => <Icon name="envelope" size={25} color={tintColor} />
};

export default MessagesList;
