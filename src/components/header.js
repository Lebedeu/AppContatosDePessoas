import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
  <View style={styleHeader.container}>
    <Text style={styleHeader.title}>
      { props.title }
    </Text>
  </View>
);

const styleHeader = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#4171d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ccc',
  },
});

export default Header;
