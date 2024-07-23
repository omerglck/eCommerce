import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, setCart} from '../../app/slices/cart';
import CustomButton from '../../components/ui/customButton';
import {styles} from './style';
import EmptyComponent from '../../components/cart/empty/index';
import CartItem from '../../components/cart/cartItem';
import {getFromStorage} from '../../utils/storageHelper';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.carts);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const loadCartFromStorage = async () => {
    const storedCart = await getFromStorage('cart');
    if (storedCart) {
      dispatch(setCart(storedCart));
    }
  };
  useEffect(() => {
    loadCartFromStorage();
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        ListEmptyComponent={<EmptyComponent />}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartItem item={item} />}
        contentContainerStyle={{paddingBottom: 100}}
      />
      <View style={styles.footerContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalAmount}>{totalAmount} ₺</Text>
        </View>
        <CustomButton
          fullWidth="50%"
          title="Complete"
          onPress={handleClearCart}
        />
      </View>
    </View>
  );
};

export default Cart;
