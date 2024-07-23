import {StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.INPUT,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    margin: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },
});
