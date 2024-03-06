import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import axiosInstance from '../utils/axiosInstance';
import BackArrow from '../assests/BackArrow';

const CoinDetailsScreen = ({route}) => {
  const {linkSrc} = route.params;
  const [coin, setCoin] = useState(null);
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/coins/details?linkSrc=${linkSrc}`,
        );
        setCoin(response.data);
      } catch (error) {
        console.error('Error fetching coin details:', error);
      }
    };

    fetchCoinDetails();
  }, [linkSrc]);

  // Function to handle back button press
  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <BackArrow />
      </TouchableOpacity>
      {coin ? (
        <>
          <Image source={{uri: coin.image}} style={styles.coinImage} />
          <Text style={styles.title}>{coin.name}</Text>
          <View style={styles.detailsContainer}>
            <DetailItem label="Country" value={coin.Country} />
            <DetailItem label="#KM" value={coin['#KM']} />
            <DetailItem label="Shape" value={coin.Shape} />
            <DetailItem label="Composition" value={coin.Composition} />
            <DetailItem label="Weight" value={coin.Weight} />
            <DetailItem label="Diameter" value={coin.Diameter} />
            <DetailItem label="Edge" value={coin.Edge} />
            <DetailItem label="Year" value={coin.Year} />
            <DetailItem label="Value" value={coin.Value} />
            <DetailItem label="Rarity" value={coin.Rarity} />
          </View>
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading....</Text>

</View>
      )}
    </ScrollView>
  );
};

const DetailItem = ({label, value}) => {
  return value ? (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  coinImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  detailValue: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default CoinDetailsScreen;
