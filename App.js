import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import Login from './screens/Login';
import LandingPage from './screens/landing';
import HomeScreen from './screens/homescreen';
import Cart from './screens/cart';
import { ViewProps } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import ViewPropTypes from 'deprecated-react-native-prop-types';
const Stack = createNativeStackNavigator();

enableScreens();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator    initialRouteName="LandingPage">
    
     <Stack.Screen name='Landingpage' component={LandingPage} options={{headerShown:false}}/>
       
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#52AD9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack :{
    backgroundColor: '#52AD9C'
  }
});

 


