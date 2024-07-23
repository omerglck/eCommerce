import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import CartItem from '../../../src/components/cart/cartItem';
import {DETAILS} from '../../../src/constants/routes';
import {addItem, removeItem} from '../../../src/app/slices/cart';

jest.mock('@react-navigation/native');
jest.mock('react-redux');
jest.mock('../../../src/app/slices/cart.js', () => ({
  addItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockNavigation = {navigate: jest.fn()};
useNavigation.mockReturnValue(mockNavigation);

const mockDispatch = jest.fn();
useDispatch.mockReturnValue(mockDispatch);

describe('CartItem', () => {
  const item = {
    createdAt: '2023-07-17T07:21:02.529Z',
    name: 'Bentley Focus',
    image: 'https://loremflickr.com/640/480/food',
    price: '51.00',
    description: 'lorem',
    model: 'CTS',
    brand: 'Lamborghini',
    id: '1',
    quantity: 1,
  };

  it('renders correctly', () => {
    const {getByText} = render(<CartItem item={item} />);

    expect(getByText('Bentley Focus')).toBeTruthy();
    expect(getByText('51.00 ₺')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
  });

  it('navigates to details screen on press', () => {
    const {getByText} = render(<CartItem item={item} />);
    fireEvent.press(getByText('Bentley Focus'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith(DETAILS, {item});
  });

  it('dispatches removeItem action on "-" button press', () => {
    const {getByText} = render(<CartItem item={item} />);
    fireEvent.press(getByText('-'));

    expect(mockDispatch).toHaveBeenCalledWith(removeItem(item));
  });

  it('dispatches addItem action on "+" button press', () => {
    const {getByText} = render(<CartItem item={item} />);
    fireEvent.press(getByText('+'));

    expect(mockDispatch).toHaveBeenCalledWith(addItem(item));
  });
});
