import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';

import {View, Text} from 'react-native';
import FilterComponent from '../../../src/components/filter';
import FilterModal from '../../../src/components/filter/filterModal';

jest.mock('../../../src/components/filter/filterModal/index.jsx', () => {
  return jest.fn(() => null);
});

describe('FilterComponent', () => {
  const mockOnApplyFilters = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <FilterComponent onApplyFilters={mockOnApplyFilters} />,
    );

    expect(getByText('Filters:')).toBeTruthy();
    expect(getByText('Select Filter')).toBeTruthy();
  });

  it('opens the filter modal when "Select Filter" button is pressed', async () => {
    FilterModal.mockImplementation(({visible, onClose, onApplyFilters}) => {
      return visible ? (
        <View>
          <Text onPress={onClose}>Close</Text>
          <Text onPress={onApplyFilters}>Apply Filters</Text>
        </View>
      ) : null;
    });

    const {getByText} = render(
      <FilterComponent onApplyFilters={mockOnApplyFilters} />,
    );
    const selectFilterButton = getByText('Select Filter');

    await act(async () => {
      fireEvent.press(selectFilterButton);
    });

    expect(FilterModal).toHaveBeenCalledWith(
      expect.objectContaining({
        visible: true,
        onClose: expect.any(Function),
        onApplyFilters: mockOnApplyFilters,
      }),
      {},
    );
  });

  it('closes the filter modal when onClose is called', async () => {
    FilterModal.mockImplementation(({visible, onClose}) => {
      return visible ? (
        <View>
          <Text onPress={onClose}>Close</Text>
        </View>
      ) : null;
    });

    const {getByText, queryByText} = render(
      <FilterComponent onApplyFilters={mockOnApplyFilters} />,
    );
    const selectFilterButton = getByText('Select Filter');

    await act(async () => {
      fireEvent.press(selectFilterButton);
    });

    await act(async () => {
      fireEvent.press(getByText('Close'));
    });

    expect(queryByText('Close')).toBeNull();
  });

  it('calls onApplyFilters when filters are applied', async () => {
    FilterModal.mockImplementation(({visible, onApplyFilters}) => {
      return visible ? (
        <View>
          <Text onPress={onApplyFilters}>Apply Filters</Text>
        </View>
      ) : null;
    });

    const {getByText} = render(
      <FilterComponent onApplyFilters={mockOnApplyFilters} />,
    );
    const selectFilterButton = getByText('Select Filter');

    await act(async () => {
      fireEvent.press(selectFilterButton);
    });

    await act(async () => {
      fireEvent.press(getByText('Apply Filters'));
    });

    expect(mockOnApplyFilters).toHaveBeenCalledTimes(1);
  });
});
