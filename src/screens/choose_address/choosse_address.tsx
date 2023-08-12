/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListAddressUser } from '../../store/selectors';
import Icon from 'react-native-vector-icons/AntDesign';
import { setDefaultAddressService, getListAddressUserServices } from '../../services/api';

import styles from './choose_address_styles';
import { setListAddressUser } from '../../store/appReducer';

const ChooseAdress = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const listAddressUser = useSelector(selectListAddressUser);

  const setDefaultAddress = async (id: string) => {
    let res = await setDefaultAddressService({ id, accessToken: 'empty' });
    console.log(res);
    if (res?.errCode === 0) {
      getListAddressUser();
    }
  };

  const getListAddressUser = async () => {
    let res = await getListAddressUserServices();
    if (res?.errCode === 0) {
      dispatch(setListAddressUser(res.data));
    }
  };

  return (
    <ScrollView style={styles.ChooseAdress_container}>
      <Text style={styles.ChooseAdress_title}>Địa chỉ</Text>
      <View style={styles.ChooseAdress_listAddress}>
        {listAddressUser?.map((item: any) => (
          <View key={item.id} style={styles.ChooseAdress_listAddress_item}>
            {item.isDefault === 'true' && (
              <View style={[styles.ChooseAdress_listAddress_item_left, { backgroundColor: 'red' }]} />
            )}
            {item.isDefault === 'false' && (
              <TouchableOpacity
                style={[styles.ChooseAdress_listAddress_item_left]}
                onPress={() => setDefaultAddress(item.id)}
              />
            )}
            <View style={styles.ChooseAdress_listAddress_item_center}>
              <Text style={styles.ChooseAdress_listAddress_item_center_nameAdress}>{item.nameAddress}</Text>
              <Text style={styles.ChooseAdress_listAddress_item_center_nameAndSdt}>
                {item.fullname} | {item.sdt}
              </Text>
              <Text style={styles.ChooseAdress_listAddress_item_center_addressText}>{item.addressText}</Text>
              <Text style={styles.ChooseAdress_listAddress_item_center_country}>my khanh, phong dien</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.ChooseAdress_listAddress_item_right}>Sửa</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}>
        <View style={styles.ChooseAdress_addUserAddress}>
          <View style={styles.ChooseAdress_addUserAddress_left}>
            <Icon name="pluscircleo" size={24} color={'red'} />
          </View>
          <Text style={styles.ChooseAdress_addUserAddress_right}>Thêm địa chỉ mới</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChooseAdress;
