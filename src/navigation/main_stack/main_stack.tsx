/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../bottom_tab/bottom_tab';

/* components */
import DetailProductScreen from '../../screens/detail_product_screen/detail_product_screen';
import StartScreen from '../../screens/start_screen/start_screen';
import LoginScreen from '../../screens/login_screen/login_screen';

const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={BottomTabs} />
        <Stack.Screen name="DetailProduct" component={DetailProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
