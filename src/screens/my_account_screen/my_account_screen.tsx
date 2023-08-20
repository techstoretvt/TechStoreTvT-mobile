/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyAccountScreen = ({ navigation }: { navigation: any }) => {
  React.useEffect(() => {
    const init = async () => {
      let accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        navigation.navigate('Login');
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>MyAccountScreen</Text>
    </View>
  );
};

export default MyAccountScreen;
