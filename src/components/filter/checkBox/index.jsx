import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

const CheckBox = ({label, checked, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID="checkbox-container">
      <View
        style={[styles.checkbox, checked && styles.checkedCheckbox]}
        testID="checkbox"
      />
      <Text style={styles.label} testID="checkbox-label">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
