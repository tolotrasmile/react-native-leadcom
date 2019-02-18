import React, { Component } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
//
class Sidebar extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'always' }} style={{ flex: 1 }}>
          <View style={{ flex: 1, marginVertical: 30, alignItems: 'center' }}>
            <Image
              source={require('../../img/logo.png')}
              resizeMode="center"
              style={{ width: 200, height: 90 }}
            />
          </View>
          <DrawerItems {...this.props} />
          <View
            style={{
              paddingVertical: 20,
              paddingLeft: 20
            }}
          >
            <View
              style={{
                height: 0.5,
                backgroundColor: '#FCBA28'
              }}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                padding: 10,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20
              }}
            >
              <Icon name="poweroff" size={20} />
              <Text style={{ marginLeft: 25, fontSize: 15, fontWeight: 'bold' }}>Déconnexion</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Sidebar;
