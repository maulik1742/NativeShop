import React from 'react';
import MainNavigation from './src/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
