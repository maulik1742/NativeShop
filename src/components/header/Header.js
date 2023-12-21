// components/Header.js

import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {color} from '../../utility';

const Header = ({handleChange, search}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Your Logo</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.searchBar}
        value={search}
        placeholderTextColor={color.gray}
        placeholder="Search..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.black,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#fff',
    color: color.black,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
