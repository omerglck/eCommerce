import {StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: AppColors.BACKGROUND,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: AppColors.BACKGROUND,
  },
  label: {
    fontSize: 16,
  },
});
