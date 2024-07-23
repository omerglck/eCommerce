import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Favorites from '../../assets/icons/Favorites';
import {AppColors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import {addItem} from '../../app/slices/cart';
import {useDispatch, useSelector} from 'react-redux';
import {CART} from '../../constants/routes';
import {styles} from './style';
import {addFavorite, removeFavorite} from '../../app/slices/favorites';

const Details = () => {
  const {params} = useRoute();
  const {item} = params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = favorites.some(favorite => favorite.id === item.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <TouchableOpacity
            style={styles.starIcon}
            onPress={handleFavoritePress}>
            <Favorites
              stroke={AppColors.WHITE}
              fill={isFavorite ? 'yellow' : 'none'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.price}>{item.price} ₺</Text>
        </View>
        <CustomButton
          fullWidth="50%"
          title="Add to Cart"
          onPress={() => {
            dispatch(addItem(item));
            navigation.navigate(CART, {item: item});
          }}
        />
      </View>
    </View>
  );
};

export default Details;
