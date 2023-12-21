import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import LoginForm from '../screens/Login/Login';
import Register from '../screens/Register/Register';

function AuthNavigation() {
  const AuthStack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <AuthStack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="login" component={LoginForm} />
      <AuthStack.Screen name="home" component={Home} />
    </AuthStack.Navigator>
    // </NavigationContainer>
  );
}

export default AuthNavigation;
