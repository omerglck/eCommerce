import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

const RadioButton = ({label, selected, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID="radio-button-container">
      <View
        testID="radio-button"
        style={[styles.radio, selected && styles.selectedRadio]}
      />
      <Text style={styles.label} testID="radio-button-label">
        {label}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
