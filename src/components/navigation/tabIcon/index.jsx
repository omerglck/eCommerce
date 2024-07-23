import {useSelector} from 'react-redux';
import Home from '../../../assets/icons/Home';
import {Text, View} from 'react-native';
import Cart from '../../../assets/icons/Cart';
import Favorites from '../../../assets/icons/Favorites';
import Person from '../../../assets/icons/Person';
import {CART, FAVORITES, HOME, PROFILE} from '../../../constants/routes';
import {styles} from './style';

const TabIcon = ({name, size, color, focused}) => {
  const iconProps = {
    width: size,
    height: size,
    fill: color,
    strokeWidth: focused ? 2 : 1,
  };

  const {totalItems} = useSelector(state => state.cart);

  if (name === HOME) {
    return (
      <View testID="home-icon">
        <Home {...iconProps} />
      </View>
    );
  } else if (name === CART) {
    return (
      <View testID="cart-icon" style={styles.container}>
        <Cart {...iconProps} />
        {totalItems === 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{0}</Text>
          </View>
        ) : (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalItems}</Text>
          </View>
        )}
      </View>
    );
  } else if (name === FAVORITES) {
    return (
      <View testID="favorites-icon">
        <Favorites {...iconProps} />
      </View>
    );
  } else if (name === PROFILE) {
    return (
      <View testID="person-icon">
        <Person {...iconProps} />
      </View>
    );
  }
  return null;
};
export default TabIcon;
