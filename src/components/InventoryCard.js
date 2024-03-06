// InventoryCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const InventoryCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={require('../assets/factory.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.price}>Price: ${item.price.balanceAmount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height:'100%'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    textAlign: 'center', // Center-align the text
  },
  price: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
});

export default InventoryCard;