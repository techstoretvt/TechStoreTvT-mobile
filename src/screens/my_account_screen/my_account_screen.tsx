/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';

import styles from './my_account_screen_styles';
import { getUserLogin } from '../../services/api';

const MyAccountScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = React.useState<any | null>(null);

  React.useEffect(() => {
    const init = async () => {
      let accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        navigation.navigate('Login');
      }
    };
    init();

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser = async () => {
    let res = await getUserLogin();
    console.log(res);
    if (res?.errCode === 0) {
      setUser(res.data);
    }
  };

  const getAvatar = () => {
    let image = 'https://source.unsplash.com/random?sig=3';
    if (!user) {
      return image;
    }
    if (user.avatarUpdate) {
      return user.avatarUpdate || image;
    }

    if (user.typeAccount === 'github') {
      return user.avatarGithub || image;
    }

    if (user.typeAccount === 'google') {
      return user.avatarGoogle || image;
    }

    if (user.typeAccount === 'facebook') {
      return user.avatarFacebook || image;
    }
    return image;
  };

  return (
    <View style={styles.MyAccount_container}>
      <View style={styles.MyAccount_header}>
        <View style={styles.MyAccount_header_top}>
          <TouchableOpacity onPress={() => navigation.navigate('SettingAccount')}>
            <Icon name="setting" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="shoppingcart" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.MyAccount_header_bottom}>
          <Image source={{ uri: getAvatar() }} style={styles.MyAccount_header_bottom_avt} />
          <View style={styles.MyAccount_header_bottom_content}>
            <Text style={styles.MyAccount_header_bottom_content_name}>{user?.firstName + ' ' + user?.lastName}</Text>
            <Text style={styles.MyAccount_header_bottom_content_type}>
              {user?.idTypeUser === '1' && 'Quản trị viên'}
              {user?.idTypeUser === '2' && 'Quản trị viên'}
              {user?.idTypeUser === '3' && 'Người dùng'}
            </Text>
            <View style={styles.MyAccount_header_bottom_content_wrap}>
              <Text style={{ color: '#fff' }}>Video: 0</Text>
              <Text style={{ color: '#fff' }}>Bài viết: 0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.MyAccount_bill}>
        <TouchableOpacity onPress={() => navigation.navigate('PurchaseFrom', { idTypeBill: 5, back: true })}>
          <View style={styles.MyAccount_bill_top}>
            <Icon2 name="text-document" size={25} color="#000" />
            <Text style={styles.MyAccount_bill_top_title}>Đơn mua</Text>
            <Text style={styles.MyAccount_bill_top_sub}>Xem lịch sử mua hàng</Text>
            <Icon name="right" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <View style={styles.MyAccount_bill_bottom}>
          <TouchableOpacity
            style={styles.MyAccount_bill_bottom_wrap}
            onPress={() => navigation.navigate('PurchaseFrom', { idTypeBill: 1, back: true })}>
            <Icon3 name="shopping-bag" size={25} color="#000" />
            <Text style={styles.MyAccount_bill_bottom_wrap_title}>Chờ xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MyAccount_bill_bottom_wrap}
            onPress={() => navigation.navigate('PurchaseFrom', { idTypeBill: 2, back: true })}>
            <Icon name="car" size={25} color="#000" />
            <Text style={styles.MyAccount_bill_bottom_wrap_title}>Đang giao</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MyAccount_bill_bottom_wrap}
            onPress={() => navigation.navigate('PurchaseFrom', { idTypeBill: 3, back: true })}>
            <Icon name="checksquareo" size={25} color="#000" />
            <Text style={styles.MyAccount_bill_bottom_wrap_title}>Đã giao</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MyAccount_bill_bottom_wrap}
            onPress={() => navigation.navigate('PurchaseFrom', { idTypeBill: 4, back: true })}>
            <Icon name="closesquareo" size={25} color="#000" />
            <Text style={styles.MyAccount_bill_bottom_wrap_title}>Đã hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyAccountScreen;
