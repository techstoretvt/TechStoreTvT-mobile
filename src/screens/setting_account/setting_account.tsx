/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './setting_account_styles';

const SettingAccount = ({ navigation }: { navigation: any }) => {
  const handleLogout = async () => {
    console.log('hi');
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.SettingAccount_container}>
      <View style={styles.SettingAccount_group}>
        <Text style={styles.SettingAccount_group_title}>Tài khoản</Text>
        <View style={styles.SettingAccount_group_list}>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Tài khoản & bảo mật</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Địa chỉ</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Tài khoản / Thẻ ngân hàng</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SettingAccount_group}>
        <Text style={styles.SettingAccount_group_title}>Cài đặt</Text>
        <View style={styles.SettingAccount_group_list}>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Cài đặt chát</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Cài đặt thông báo</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Cài đặt riêng tư</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Ngôn ngữ</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SettingAccount_group}>
        <Text style={styles.SettingAccount_group_title}>Hỗ trợ</Text>
        <View style={styles.SettingAccount_group_list}>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Trung tâm hỗ trợ</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Tiêu chuẩn cộng đồng</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Điều khoản dịch vụ</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SettingAccount_group_list_item}>
            <Text style={styles.SettingAccount_group_list_text}>Giới thiệu</Text>
            <Icon name="right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <Button icon="account" mode="contained" onPress={handleLogout} style={{ marginTop: 10 }}>
        Đăng xuất
      </Button>
    </ScrollView>
  );
};

export default SettingAccount;
