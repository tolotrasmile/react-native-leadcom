import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Dashboard from './Dashboard';
import Stat from './Stat';
import CallsList from './Call';
import MessagesList from './Message';
import RequestsList from './Request';
import Sidebar from '../Shared/Sidebar';

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard
    },
    Stat: {
      screen: Stat
    },
    CallsList: {
      screen: CallsList
    },
    MessagesList: {
      screen: MessagesList
    },
    RequestsList: {
      screen: RequestsList
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />,
    contentOptions: {
      activeTintColor: '#FCBA28',
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default AppDrawerNavigator;
