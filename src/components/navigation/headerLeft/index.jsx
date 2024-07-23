import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackArrow from '../../../assets/icons/BackArrow';
import {styles} from './style';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
      testID="back-button">
      <BackArrow />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
