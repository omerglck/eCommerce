import {View, ActivityIndicator} from 'react-native';
import {styles} from './style';
import {AppColors} from '../../../theme/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={'large'}
        color={AppColors.GRAY}
        testID="activity-indicator"
      />
    </View>
  );
};
export default Spinner;
