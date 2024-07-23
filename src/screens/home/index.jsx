import {StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';

import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import debounce from 'lodash/debounce';
import {fetchAllProducts} from '../../app/actions/productsAction';
import {sortBy} from '../../utils/sortUtils';
import Header from '../../components/home/header';
import FilterComponent from '../../components/filter';
import SearchBar from '../../components/home/searchBar';
import Spinner from '../../components/ui/spinner';
import ProductCard from '../../components/product';
import {loadCartFromStorage} from '../../app/actions/cartActions';
import {styles} from './style';

const Home = () => {
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector(state => state.products);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
    setDisplayedProducts(products.slice(0, 12));
  }, [products]);

  const handleSearch = useCallback(
    debounce(query => {
      const lowercasedQuery = query.toLowerCase();
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(lowercasedQuery),
      );
      setFilteredProducts(filtered);
      setDisplayedProducts(filtered.slice(0, 12));
      setPage(1);
    }, 300),
    [products],
  );

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  const loadMoreProducts = () => {
    if (filteredProducts.length > displayedProducts.length) {
      const nextPage = page + 1;
      const newProducts = filteredProducts.slice(0, nextPage * 12);
      setDisplayedProducts(newProducts);
      setPage(nextPage);
    }
  };

  const handleApplyFilters = ({sortByType, selectedBrands, selectedModels}) => {
    let filtered = products;

    if (
      Object.keys(selectedBrands).length > 0 &&
      Object.values(selectedBrands).includes(true)
    ) {
      filtered = filtered.filter(product => selectedBrands[product.brand]);
    }

    if (
      Object.keys(selectedModels).length > 0 &&
      Object.values(selectedModels).includes(true)
    ) {
      filtered = filtered.filter(product => selectedModels[product.model]);
    }

    if (sortByType) {
      filtered = sortBy(filtered, sortByType);
    }

    setFilteredProducts(filtered);
    setDisplayedProducts(filtered.slice(0, 12));
    setPage(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FilterComponent onApplyFilters={handleApplyFilters} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={displayedProducts}
          numColumns={2}
          renderItem={({item}) => <ProductCard item={item} />}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            displayedProducts.length < filteredProducts.length && !loading ? (
              <Spinner />
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
