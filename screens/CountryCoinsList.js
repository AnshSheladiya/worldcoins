import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axiosInstance from '../utils/axiosInstance';
import {useNavigation} from '@react-navigation/native';

const CountryCoinsList = ({route}) => {
  const {country} = route.params;
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  // Function to navigate to coin details screen
  const handleCoinPress = linkSrc => {
    navigation.navigate('CoinDetails', {linkSrc});
  };

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/coins?country=${country.name}`,
        );
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching coins data:', error);
      }
    };

    fetchCoinsData();
  }, [country]);

  const renderCoinItem = ({item}) => (
    // <TouchableOpacity onPress={() => handleCoinPress(item._id)}>

    <TouchableOpacity
      style={styles.coinItem}
      onPress={() => handleCoinPress(item.anchorLinkSrc)}>
      <Image source={{uri: item.image}} style={styles.coinImage} />
      <View style={styles.coinInfo}>
        <Text style={styles.coinName}>{item.name}</Text>
        <Text style={styles.countryName}>{country.name}</Text>
      </View>
    </TouchableOpacity>
    // </TouchableOpacity>
  );

  // Filter coins based on search query
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <Text style={styles.title}>Coins List for {country.name}</Text>
      {coins && coins.length > 0 ? (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Search coins..."
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
          <FlatList
            data={filteredCoins}
            renderItem={renderCoinItem}
            keyExtractor={(item, index) => `${item.name}:${item.anchorLinkSrc}`}
            contentContainerStyle={styles.coinList}
            numColumns={2}
          />
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading....</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  coinList: {
    paddingBottom: 20,
  },
  coinItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  coinImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'contain',
  },
  coinInfo: {
    padding: 10,
  },
  coinName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 14,
    color: '#666',
  },
});

export default CountryCoinsList;
