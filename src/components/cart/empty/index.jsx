import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {HOME} from '../../../constants/routes';

const EmptyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your cart is empty, add items!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(HOME)}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EmptyComponent;
