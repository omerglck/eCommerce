import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../../../src/components/home/header';

describe('Header', () => {
  it('renders correctly with the correct text', () => {
    const {getByText} = render(<Header />);

    expect(getByText('E-Market')).toBeTruthy();
  });
});
