import React from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CallsList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="CallsList" />
    </View>
  );
}

CallsList.navigationOptions = {
  drawerLabel: 'Liste des appels',
  drawerIcon: ({ tintColor }) => <Icon name="phone" size={25} color={tintColor} />
};

export default CallsList;
