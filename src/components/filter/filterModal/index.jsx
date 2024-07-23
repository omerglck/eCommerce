import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

import Times from '../../../assets/icons/Times';
import {sortOptions} from '../../../utils/sortTypes';
import RadioButton from '../radioButton';
import CheckBox from '../checkBox';
import CustomButton from '../../ui/customButton';
import {styles} from './style';

const FilterModal = ({visible, onClose, onApplyFilters}) => {
  const {products} = useSelector(state => state.products);

  const [sortByType, setSortByType] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedModels, setSelectedModels] = useState({});

  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  const uniqueModels = [...new Set(products.map(product => product.model))];

  const handleBrandChange = brand => {
    setSelectedBrands(prevState => ({
      ...prevState,
      [brand]: !prevState[brand],
    }));
  };

  const handleModelChange = model => {
    setSelectedModels(prevState => ({
      ...prevState,
      [model]: !prevState[model],
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters({sortByType, selectedBrands, selectedModels});
    onClose();
  };

  const handleClearFilters = () => {
    setSortByType(null);
    setSelectedBrands({});
    setSelectedModels({});
    onApplyFilters({sortByType: null, selectedBrands: {}, selectedModels: {}});
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            testID="close-button">
            <Times />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Filter</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.innerContent}>
              <Text style={styles.sectionTitle}>Sort By</Text>
              {sortOptions.map(option => (
                <RadioButton
                  key={option.value}
                  label={option.label}
                  selected={sortByType === option.value}
                  onPress={() => setSortByType(option.value)}
                />
              ))}
              <View style={styles.separator} />
              <Text style={styles.sectionTitle}>Brand</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                testID="brand-search"
              />
              <ScrollView style={styles.subScrollView}>
                {uniqueBrands.map(brand => (
                  <CheckBox
                    key={brand}
                    label={brand}
                    checked={!!selectedBrands[brand]}
                    onPress={() => handleBrandChange(brand)}
                  />
                ))}
              </ScrollView>
              <View style={styles.separator} />
              <Text style={styles.sectionTitle}>Model</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                testID="model-search"
              />
              <ScrollView style={styles.subScrollView}>
                {uniqueModels.map(model => (
                  <CheckBox
                    key={model}
                    label={model}
                    checked={!!selectedModels[model]}
                    onPress={() => handleModelChange(model)}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Apply"
              onPress={handleApplyFilters}
              fullWidth="48%"
              style={styles.applyButton}
            />
            <CustomButton
              title="Clear"
              onPress={handleClearFilters}
              fullWidth="48%"
              style={styles.clearButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
