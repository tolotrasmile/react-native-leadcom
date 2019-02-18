import React, { Component } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashboardItem from './dashboard-item';
import PTRView from 'react-native-pull-to-refresh';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }
  refresh() {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 2000);
  }
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.refresh.bind(this)} />
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            padding: 20
          }}
        >
          <DashboardItem title="Visites" icon="bar-chart" color="#327AB7" />
          <DashboardItem title="Appels" icon="phone" color="#5CB85C" />
          <DashboardItem title="Message(s) non lu(s)" icon="envelope" color="#F0AD4E" />
          <DashboardItem title="Demandes" icon="ticket" color="#D9534F" />
        </View>
      </ScrollView>
    );
  }
}

Dashboard.navigationOptions = {
  drawerLabel: 'Tableau de bord',
  drawerIcon: ({ tintColor }) => <Icon name="dashboard" size={25} color={tintColor} />
};

export default Dashboard;
