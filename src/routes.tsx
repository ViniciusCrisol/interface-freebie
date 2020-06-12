import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from './pages/InitialPage';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AddManualAccount from './pages/AddManualAccount';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <AppStack.Screen name='InitialPage' component={InitialPage} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='Profile' component={Profile} />
        <AppStack.Screen name='Account' component={Account} />
        <AppStack.Screen name='AddAccount' component={AddAccount} />
        <AppStack.Screen name='AddManualAccount' component={AddManualAccount} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
