import {View, Text} from 'react-native';
import {styles} from './style';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>E-Market</Text>
    </View>
  );
};

export default Header;
