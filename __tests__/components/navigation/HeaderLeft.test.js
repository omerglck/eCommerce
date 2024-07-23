import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {useNavigation} from '@react-navigation/native';
import HeaderLeft from '../../../src/components/navigation/headerLeft';

jest.mock('@react-navigation/native');

describe('HeaderLeft', () => {
  const mockGoBack = jest.fn();

  beforeEach(() => {
    useNavigation.mockReturnValue({goBack: mockGoBack});
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByTestId} = render(<HeaderLeft />);

    expect(getByTestId('back-button')).toBeTruthy();
  });

  it('calls navigation.goBack on button press', () => {
    const {getByTestId} = render(<HeaderLeft />);

    fireEvent.press(getByTestId('back-button'));

    expect(mockGoBack).toHaveBeenCalled();
  });
});
