import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './style';
import Favorites from '../../../assets/icons/Favorites';
import {removeFavorite} from '../../../app/slices/favorites';

const FavoriteItem = ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(item));
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price} ₺</Text>
      </View>
      <TouchableOpacity onPress={handleRemoveFavorite}>
        <Favorites stroke="white" fill="yellow" />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteItem;
