import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import SplashScreen from './components/FlashScreen';

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the splash screen after a certain duration (e.g., 3000 milliseconds)
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {splashVisible ? (
        // Render the SplashScreen component if splashVisible is true
        <SplashScreen />
      ) : (
        // Render the StackNavigator once splashVisible is false
        <StackNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
