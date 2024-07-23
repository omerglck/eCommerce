import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/customButton';

describe('CustomButton', () => {
  it('should render the button with the provided title', () => {
    const {getByText} = render(<CustomButton title="Test Button" />);
    const buttonTitle = getByText('Test Button');
    expect(buttonTitle).toBeTruthy();
  });

  it('should call the onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <CustomButton title="Test Button" onPress={onPressMock} />,
    );
    const button = getByText('Test Button');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
