import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../../../src/components/home/searchBar';

describe('SearchBar', () => {
  const mockSetSearchQuery = jest.fn();
  const searchQuery = 'initial query';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={mockSetSearchQuery}
      />,
    );

    expect(getByPlaceholderText('Search')).toBeTruthy();
  });

  it('displays the correct initial value', () => {
    const {getByDisplayValue} = render(
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={mockSetSearchQuery}
      />,
    );

    expect(getByDisplayValue(searchQuery)).toBeTruthy();
  });

  it('calls setSearchQuery on text input change', () => {
    const {getByPlaceholderText} = render(
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={mockSetSearchQuery}
      />,
    );

    const input = getByPlaceholderText('Search');
    const newText = 'new query';

    fireEvent.changeText(input, newText);

    expect(mockSetSearchQuery).toHaveBeenCalledWith(newText);
    expect(mockSetSearchQuery).toHaveBeenCalledTimes(1);
  });
});
