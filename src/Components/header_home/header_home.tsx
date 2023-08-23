/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from '@rneui/themed';

import styles from './header_home_styles';

// type inputSearchType = {
//     text: string;
// };
interface HeaderHome {
  navigation: any;
}

const HeaderHome = ({ navigation }: HeaderHome) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrap_search} onPress={() => navigation.navigate('SearchScreen')}>
          <View style={styles.wrap_icon}>
            <Icon name="search" size={24} color="#999" />
          </View>
          <View style={styles.wrap_input}>
            <Text>Tim kiem san pham...</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.wrap_cart}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart-plus" size={30} color="#fff" />
            <Badge
              value={10}
              status="error"
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                position: 'absolute',
                top: -6,
                left: 18,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrap_notify}>
          <TouchableOpacity onPress={() => navigation.navigate('PurchaseFrom')}>
            <Icon name="bell" size={26} color="#fff" />
            <Badge
              value={10}
              status="error"
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                position: 'absolute',
                top: -6,
                left: 12,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HeaderHome);
