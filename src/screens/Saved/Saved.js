import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import SearchGlassIcon from '../../svgs/SearchGlassIcon';

const Saved = () => {
  return (
    <View style={styles.container}>
      {/* Removed ScrollView and applied styles directly to the container */}
      <View style={styles.scrollContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Saved recipes</Text>
        </View>

        {/* Message for no saved recipes */}
        <View style={styles.centerContainer}>
        <View style={styles.glassIconContainer}>
        <SearchGlassIcon size={70}/>
        </View>

          <Text style={styles.messageText}>You haven't saved any recipes yet.</Text>
        </View>

      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background color for the screen
  },
  scrollContainer: {
    flex: 1, // Ensure the container takes up the entire available space
    paddingBottom: 20, // Add padding to the bottom to make space for bottom contents
  },
  headerContainer: {
    marginRight: '7%',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray',
  },
  glassIconContainer:{
    marginVertical:20
  }
});
