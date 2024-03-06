import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CountryCoinsList from '../screens/CountryCoinsList';
import CountryList from '../screens/CountryList';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CountryList" component={CountryList} options={{ headerShown: false }}/>
      <Stack.Screen name="CountryCoinsList" component={CountryCoinsList} options={{ headerShown: false }}/>
      <Stack.Screen name="CoinDetails" component={CoinDetailsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default StackNavigator;
