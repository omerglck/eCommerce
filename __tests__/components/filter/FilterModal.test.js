import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import FilterModal from '../../../src/components/filter/filterModal';
import {sortOptions} from '../../../src/utils/sortTypes';

const mockStore = configureStore([]);

describe('FilterModal', () => {
  let store;
  let mockOnClose;
  let mockOnApplyFilters;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [
          {brand: 'Brand1', model: 'Model1'},
          {brand: 'Brand2', model: 'Model2'},
        ],
      },
    });

    mockOnClose = jest.fn();
    mockOnApplyFilters = jest.fn();

    jest.clearAllMocks();
  });

  const renderComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <FilterModal
          visible={true}
          onClose={mockOnClose}
          onApplyFilters={mockOnApplyFilters}
          {...props}
        />
      </Provider>,
    );
  };

  it('renders correctly', () => {
    const {getByText, getByTestId} = renderComponent();

    expect(getByText('Filter')).toBeTruthy();
    expect(getByText('Sort By')).toBeTruthy();
    expect(getByText('Brand')).toBeTruthy();
    expect(getByTestId('brand-search')).toBeTruthy();
    expect(getByText('Model')).toBeTruthy();
    expect(getByTestId('model-search')).toBeTruthy();

    sortOptions.forEach(option => {
      expect(getByText(option.label)).toBeTruthy();
    });

    expect(getByText('Brand1')).toBeTruthy();
    expect(getByText('Brand2')).toBeTruthy();

    expect(getByText('Model1')).toBeTruthy();
    expect(getByText('Model2')).toBeTruthy();
  });

  it('calls onClose when close button is pressed', () => {
    const {getByTestId} = renderComponent();

    fireEvent.press(getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onApplyFilters with correct filters when apply button is pressed', () => {
    const {getByText, getByTestId} = renderComponent();

    fireEvent.press(getByText(sortOptions[0].label));

    fireEvent.press(getByText('Brand1'));

    fireEvent.press(getByText('Model1'));

    fireEvent.press(getByText('Apply'));

    expect(mockOnApplyFilters).toHaveBeenCalledWith({
      sortByType: sortOptions[0].value,
      selectedBrands: {Brand1: true},
      selectedModels: {Model1: true},
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('clears filters when clear button is pressed', () => {
    const {getByText} = renderComponent();

    fireEvent.press(getByText(sortOptions[0].label));

    fireEvent.press(getByText('Brand1'));

    fireEvent.press(getByText('Model1'));

    fireEvent.press(getByText('Clear'));

    expect(mockOnApplyFilters).toHaveBeenCalledWith({
      sortByType: null,
      selectedBrands: {},
      selectedModels: {},
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
