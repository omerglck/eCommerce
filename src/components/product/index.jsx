import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import Favorites from '../../assets/icons/Favorites';
import {styles} from './style';
import CustomButton from '../ui/customButton';
import {useNavigation} from '@react-navigation/native';
import {DETAILS} from '../../constants/routes';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../app/slices/cart';
import {addFavorite, removeFavorite} from '../../app/slices/favorites';

export const formatDate = dateStr => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, options);
};

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
    <Pressable
      testID="product-card"
      style={styles.card}
      onPress={() => navigation.navigate(DETAILS, {item: item})}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item?.image}}
          style={styles.image}
          testID="product-image"
        />
        <TouchableOpacity style={styles.starIcon} onPress={handleFavoritePress}>
          <Favorites
            stroke={isFavorite ? 'yellow' : 'white'}
            fill={isFavorite ? 'yellow' : 'none'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>{item?.price} ₺</Text>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {item?.name}
        </Text>
        <Text style={styles.detailsText}>Brand: {item.brand}</Text>
        <Text style={styles.detailsText}>Model: {item.model}</Text>
        <Text style={styles.detailsText}>
          Created on: {formatDate(item.createdAt)}
        </Text>
      </View>
      <CustomButton
        title="Add to Cart"
        onPress={() => dispatch(addItem(item))}
      />
    </Pressable>
  );
};

export default ProductCard;
