import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {DETAILS} from '../../../constants/routes';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../../app/slices/cart';
const CartItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(DETAILS, {item: item})}
      style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price} ₺</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => dispatch(removeItem(item))}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => dispatch(addItem(item))}
          style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
