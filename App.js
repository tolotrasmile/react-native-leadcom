import React from 'react';
import { TouchableOpacity } from 'react-native';
import AuthNavigator from './src/screens/Auth';
import { Icon as MenuIcon } from 'native-base';
import Splash from './src/screens/Splash';
import App from './src/screens/App';

import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const DashboardStackNavigator = createStackNavigator(
  {
    App
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: 'white'
        },
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuIcon name="menu" style={{ color: '#FCBA28', marginLeft: 20 }} />
          </TouchableOpacity>
        )
      };
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: Splash },
  Dashboard: { screen: DashboardStackNavigator },
  Auth: { screen: AuthNavigator }
});

export default createAppContainer(AppSwitchNavigator);
