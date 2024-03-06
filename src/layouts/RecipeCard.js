import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const RecipeCard = ({ recipe }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: recipe.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.category}>{recipe.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    maxWidth: 300, // Adjust width here
    overflow: 'hidden',
    elevation: 3,
    marginHorizontal:10,
    marginTop:10
  },
  image: {
    width: '100%',
    height: 180, // Adjust height here
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14, // Adjust font size here
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  category: {
    fontSize: 12, // Adjust font size here
    color: '#888',
  },
});

export default RecipeCard;
