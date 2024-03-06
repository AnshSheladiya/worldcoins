import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchGlassIcon from '../svgs/SearchGlassIcon';

const SearchBar = ({ onChangeText, value, placeholder }) => {
  return (
    <View style={styles.container}>
      {/* <Icon name="search" size={20} color="#999" style={styles.icon} /> */}
      <SearchGlassIcon size={22}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9E9595"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    borderColor:'#D9D9D9',
    borderWidth:2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: '#9E9595',
    marginLeft:5
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default SearchBar;
