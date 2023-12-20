import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import LoginForm from './screens/Login/Login';
import Register from './screens/Register/Register';
import SplashScreen from './screens/splashScreen/SplashScreen';

function MainNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="login" component={LoginForm} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default MainNavigation;
