import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NotificationIcon from '../svgs/NotificationIcon';

const HorizontalCardComponent = ({ data }) => {
  return (
    <View style={styles.card}>
      <NotificationIcon style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.msg}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 10,
    // marginHorizontal: 20,
    padding: 18,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
      color: 'black',
      marginVertical:5
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HorizontalCardComponent;
