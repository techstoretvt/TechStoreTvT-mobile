/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../bottom_tab/bottom_tab';

/* components */
import DetailProductScreen from '../../screens/detail_product_screen/detail_product_screen';
import StartScreen from '../../screens/start_screen/start_screen';
import LoginScreen from '../../screens/login_screen/login_screen';
import CartScreen from '../../screens/cart_screen/cart_screen';
import PaymentScreen from '../../screens/payment_screen/payment_screen';

const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Payment" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={BottomTabs} />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProductScreen}
          options={{ headerShown: false }}
          initialParams={{ idProduct: '2b56950d-11bf-4797-9594-de2e4774ab3e' }}
        />
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: true, title: 'Giỏ hàng (22)' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: true, title: 'Thanh toán' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
