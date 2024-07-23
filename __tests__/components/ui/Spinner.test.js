import React from 'react';
import {render} from '@testing-library/react-native';
import Spinner from '../../../src/components/ui/spinner';
import {AppColors} from '../../../src/theme/colors';

describe('Spinner', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Spinner />);

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('renders ActivityIndicator with correct props', () => {
    const {getByTestId} = render(<Spinner />);

    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.size).toBe('large');
    expect(activityIndicator.props.color).toBe(AppColors.GRAY);
  });
});
