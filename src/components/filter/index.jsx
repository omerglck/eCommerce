import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import FilterModal from './filterModal';
import {styles} from './style';

const FilterComponent = ({onApplyFilters}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectFilter = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>Filters:</Text>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={handleSelectFilter}>
        <Text style={styles.filterButtonText}>Select Filter</Text>
      </TouchableOpacity>
      <FilterModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onApplyFilters={onApplyFilters}
      />
    </View>
  );
};

export default FilterComponent;
