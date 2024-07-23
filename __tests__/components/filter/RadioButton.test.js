import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RadioButton from '../../../src/components/filter/radioButton';
import {AppColors} from '../../../src/theme/colors';

describe('RadioButton', () => {
  const label = 'Test Label';
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with the given label', () => {
    const {getByText} = render(
      <RadioButton label={label} selected={false} onPress={mockOnPress} />,
    );

    expect(getByText(label)).toBeTruthy();
  });

  it('renders correctly when selected', () => {
    const {getByTestId} = render(
      <RadioButton label={label} selected={true} onPress={mockOnPress} />,
    );

    const radioButton = getByTestId('radio-button');
    expect(radioButton.props.style).toContainEqual({
      backgroundColor: AppColors.BACKGROUND,
    });
  });

  it('renders correctly when not selected', () => {
    const {getByTestId} = render(
      <RadioButton label={label} selected={false} onPress={mockOnPress} />,
    );

    const radioButton = getByTestId('radio-button');
    expect(radioButton.props.style).not.toContainEqual({
      backgroundColor: AppColors.BACKGROUND,
    });
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(
      <RadioButton label={label} selected={false} onPress={mockOnPress} />,
    );

    fireEvent.press(getByTestId('radio-button-container'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
