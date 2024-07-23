import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './style';
import {removeFavorite} from '../../app/slices/favorites';
import FavoritesIcon from '../../assets/icons/Favorites';
import FavoriteItem from '../../components/favorites/favoriteItem';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FavoriteItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No favorites added</Text>
        }
      />
    </View>
  );
};

export default Favorites;
