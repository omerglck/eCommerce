import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CheckBox from '../../../src/components/filter/checkBox';
import {AppColors} from '../../../src/theme/colors';

describe('CheckBox', () => {
  const label = 'Test Label';
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with the given label', () => {
    const {getByText} = render(
      <CheckBox label={label} checked={false} onPress={mockOnPress} />,
    );

    expect(getByText(label)).toBeTruthy();
  });

  it('renders correctly when checked', () => {
    const {getByTestId} = render(
      <CheckBox label={label} checked={true} onPress={mockOnPress} />,
    );

    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.style).toContainEqual({
      backgroundColor: AppColors.BACKGROUND,
    });
  });

  it('renders correctly when not checked', () => {
    const {getByTestId} = render(
      <CheckBox label={label} checked={false} onPress={mockOnPress} />,
    );

    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.style).not.toContainEqual({
      backgroundColor: AppColors.BACKGROUND,
    });
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(
      <CheckBox label={label} checked={false} onPress={mockOnPress} />,
    );

    fireEvent.press(getByTestId('checkbox-container'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
