import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home/Home';

function MainNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default MainNavigation;
