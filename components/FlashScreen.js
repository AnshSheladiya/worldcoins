import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import logo from '../assests/economy.png'
const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: fadeAnim }}>
      <Image source={logo} style={{ width: 200, height: 200 }} />
    </Animated.View>
  );
}

export default SplashScreen;
