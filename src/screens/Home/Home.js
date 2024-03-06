import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../layouts/SearchBar';
import HomeSlider from '../../components/HomeSlider';
import CategorySlider from '../../components/CategorySlider';
import recipes from '../../data/recipes.json'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Find best recipes for cooking</Text>
        </View>
        <View>
          <SearchBar placeholder="Search recipes" />
        </View>
        <View style={styles.sliderContainer}>
          <HomeSlider data={recipes} title={'Trending now 🔥'}/>
        </View>
        <View style={styles.sliderContainer}>
          <CategorySlider />
        </View>
        <View style={styles.recentRecipesSliderContainer}>
          <HomeSlider data={recipes} title={'Recent recipe ⭐'}/>
        </View>
        <View style={styles.endContainer}></View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background color for the screen
  },
  scrollContainer: {
    paddingHorizontal: 30, // Adjust the padding as needed
    paddingBottom: 20, // Add padding to the bottom to make space for bottom contents
  },
  headerContainer: {
    marginRight: '7%',
    marginVertical: 15,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  sliderContainer: {
    marginBottom: 20, // Adjust the margin bottom to add space between sliders
  },
  endContainer:{
    marginBottom: 60,
  }
});
