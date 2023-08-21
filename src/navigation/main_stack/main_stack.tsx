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
import ChooseAdress from '../../screens/choose_address/choosse_address';
import NewAddress from '../../screens/new_address/new_address';
import ChooseCountry, { ChooseCountry_Header } from '../../components/choose_country/choose_country';
import ChooseDistrict, { ChooseDistrict_Header } from '../../components/choose_district/choose_district';
import ChoosePaymentMethob from '../../components/choose_payment_methob/choose_payment_methob';
import PurchaseFrom from '../../screens/purchase_from/purchase_from';
import DetailBill from '../../screens/detail_bill/detail_bill';
import EvaluateScreen from '../../screens/evaluata_screen/evaluate_screen';
import DetailNotify from '../../screens/detail_notify/detail_notify';
import SettingAccount from '../../screens/setting_account/setting_account';
import RegisterScreen from '../../screens/register_screen/register_screen';

const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={BottomTabs} />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProductScreen}
          options={{ headerShown: false }}
          initialParams={{ idProduct: '2b56950d-11bf-4797-9594-de2e4774ab3e' }}
        />
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: true, title: 'Giỏ hàng' }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: true, title: 'Thanh toán' }} />
        <Stack.Screen
          name="ChooseAddress"
          component={ChooseAdress}
          options={{ headerShown: true, title: 'Chọn địa chỉ nhận hàng' }}
        />
        <Stack.Screen
          name="NewAddress"
          component={NewAddress}
          options={{ headerShown: true, title: 'Thêm địa chỉ mới' }}
        />
        <Stack.Screen
          name="ChooseCountry"
          component={ChooseCountry}
          options={{
            headerShown: true,
            headerTitle: () => <ChooseCountry_Header />,
          }}
        />
        <Stack.Screen
          name="ChooseDistrict"
          component={ChooseDistrict}
          options={{
            headerShown: true,
            headerTitle: () => <ChooseDistrict_Header />,
          }}
        />
        <Stack.Screen
          name="ChoosePaymentMethob"
          component={ChoosePaymentMethob}
          options={{
            headerShown: true,
            title: 'Phương thức thanh toán',
          }}
        />
        <Stack.Screen
          name="PurchaseFrom"
          component={PurchaseFrom}
          initialParams={{
            idTypeBill: 1,
          }}
        />
        <Stack.Screen
          name="DetailBill"
          component={DetailBill}
          // initialParams={{
          //   idTypeBill: 1,
          // }}
        />
        <Stack.Screen
          name="EvaluateScreen"
          component={EvaluateScreen}
          initialParams={{
            idDetailBill: '7bbfb3c4-09ca-4785-bd95-6427b43131d3',
          }}
        />
        <Stack.Screen name="DetailNotify" component={DetailNotify} />
        <Stack.Screen
          name="SettingAccount"
          component={SettingAccount}
          options={{
            headerShown: true,
            title: 'Thiết lập tài khoản',
          }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
