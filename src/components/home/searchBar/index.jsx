import React from 'react';
import {View, TextInput} from 'react-native';
import Search from '../../../assets/icons/Search';
import {styles} from './style';

const SearchBar = ({searchQuery, setSearchQuery}) => {
  const handleInputChange = text => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.searchContainer}>
      <Search />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default SearchBar;
