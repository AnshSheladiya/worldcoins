import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import RightBtnIcon from '../svgs/RightBtnIcon';
import RecipeCard from '../layouts/RecipeCard';
const HomeSlider = ({title,data}) => {
  // Render item for horizontal slider
  const renderItem = ({ item }) => {
    return <RecipeCard recipe={item} />;
  };
  return (
    <View style={styles.container}>
      {/* Title and See All button */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
          <RightBtnIcon/>
        </TouchableOpacity>
      </View>

      {/* Horizontal slider of cards */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  seeAllButton: {
    display:'flex',
    flexDirection:'row',
    padding: 5,
    color:'red'
  },
  seeAllText:{color:'red',marginHorizontal:6,fontSize:14},
  slider: {
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
  },
});

export default HomeSlider;