// SquareCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SquareCard = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
      <Text style={styles.price}>From ${category.fromPrice}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%', // 48% to fit two columns with some spacing
    aspectRatio: 1, // Ensure the aspect ratio is 1:1 (square)
    backgroundColor: '#BFD1D3',
    borderRadius: 10,
    padding: 10,
    margin: 5, // Add some margin for spacing
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color:'black',
    marginTop: 5,
  },
});

export default SquareCard;
