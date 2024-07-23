import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import EmptyComponent from '../../../src/components/cart/empty';
import {HOME} from '../../../src/constants/routes';

jest.mock('@react-navigation/native');

describe('EmptyComponent', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigation.mockReturnValue({navigate});
  });

  it('renders correctly with message and button', () => {
    const {getByText} = render(<EmptyComponent />);

    expect(getByText('Your cart is empty, add items!')).toBeTruthy();

    expect(getByText('Go to Home')).toBeTruthy();
  });

  it('navigates to HOME when button is pressed', () => {
    const {getByText} = render(<EmptyComponent />);

    fireEvent.press(getByText('Go to Home'));
    expect(navigate).toHaveBeenCalledWith(HOME);
  });
});
