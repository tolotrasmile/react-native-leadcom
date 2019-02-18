import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function DashboardItem({ count, icon, color, title }) {
  return (
    <View style={{ backgroundColor: color, borderRadius: 6, padding: 2, marginBottom: 20 }}>
      {/** Header */}
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Icon name={icon} size={36} color="white" />
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>{count}</Text>
          <Text style={{ fontSize: 13, color: 'white' }}>{title}</Text>
        </View>
      </View>
      {/** Content */}
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text style={{ color }}>Voir les détails</Text>
            <Icon name="arrow-circle-right" size={28} color={color} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

DashboardItem.defaultProps = {
  count: 0,
  icon: 'dashboard',
  color: 'red',
  title: ''
};

export default DashboardItem;
