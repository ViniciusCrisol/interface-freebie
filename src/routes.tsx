import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from './pages/InitialPage';
import Register from './pages/Register';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AddManualAccount from './pages/AddManualAccount';
import Success from './pages/Success';
import Premium from './pages/Premium';
import GetPremium from './pages/GetPremium';

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
        <AppStack.Screen name='Account' component={Account} />
        <AppStack.Screen name='AddAccount' component={AddAccount} />
        <AppStack.Screen name='AddManualAccount' component={AddManualAccount} />
        <AppStack.Screen name='Success' component={Success} />
        <AppStack.Screen name='Premium' component={Premium} />
        <AppStack.Screen name='GetPremium' component={GetPremium} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
