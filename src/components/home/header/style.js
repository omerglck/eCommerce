import {Dimensions, StyleSheet} from 'react-native';
import {AppColors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Dimensions.get('window').height * 0.09,
    backgroundColor: AppColors.BACKGROUND,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: AppColors.WHITE,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
