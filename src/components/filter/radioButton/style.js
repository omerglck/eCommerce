import {StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppColors.BACKGROUND,
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: AppColors.BACKGROUND,
  },
  label: {
    fontSize: 16,
  },
});
