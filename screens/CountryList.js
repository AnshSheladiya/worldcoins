import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import axiosInstance from '../utils/axiosInstance';
import CountryFlag from 'react-native-country-flag';
import {useNavigation} from '@react-navigation/native';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    axiosInstance
      .get('/api/coins/countries')
      .then(response => {
        const data = response.data;
        if (data) {
          setCountries(data);
          setFilteredCountries(data);
        } else {
          console.error('Failed to fetch countries:', data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryPress = useCallback(
    item => {
      // Navigate to CountryCoinsList component passing the selected country as a parameter
      navigation.navigate('CountryCoinsList', {country: item});
    },
    [navigation],
  );

  const handleSearch = useCallback(
    text => {
      setSearchText(text);
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredCountries(filtered);
    },
    [countries],
  );

  const MemoizedCountryItem = useCallback(
    ({item}) => {
      // Extract the ISO country code and coin count from the item object
      const isoCode = item.code ? item.code : '';
      const coinCount = item.coinCount ? item.coinCount : 0;

      return (
        <TouchableOpacity onPress={() => handleCountryPress(item)}>
          <View style={styles.shadowContainer}>
            <View style={styles.countryContainer}>
              {/* <CountryFlag isoCode={isoCode} size={40} /> */}
              <View style={styles.countryInfo}>
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.coinCount}>Coins: {coinCount}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [handleCountryPress],
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      {countries && countries.length > 0 ? (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Country"
            onChangeText={handleSearch}
            value={searchText}
            placeholderTextColor="#999"
          />

          <FlatList
            data={filteredCountries}
            renderItem={({item}) => <MemoizedCountryItem item={item} />}
            keyExtractor={(item, index) => index.toString()} // Use index as key if _id is not available
            contentContainerStyle={styles.contentContainer}
            removeClippedSubviews={true}
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
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  countryInfo: {
    marginLeft: 20,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  coinCount: {
    fontSize: 16,
    color: '#666',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default CountryList;
