import {StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    paddingVertical: 10,
    backgroundColor: AppColors.BACKGROUND,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.WHITE,
  },
});
