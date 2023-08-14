/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Switch, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './new_address_styles';
import { selectIndexCountry, selectIndexDistrict } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import provinces from '../../utils/provinces.json';
import { addNewAddressUser, getListAddressUserServices } from '../../services/api';
import { setListAddressUser } from '../../store/appReducer';

const Countries = provinces.map((item, index) => {
  return {
    name: item.name,
    value: index,
  };
});

const NewAddress = ({ navigation }: { navigation: any }) => {
  const [name, setName] = React.useState('');
  const [nameAddress, setNameAddress] = React.useState('');
  const [sdt, setSdt] = React.useState('');
  const [addressText, setAddressText] = React.useState('');
  const indexCountry = useSelector(selectIndexCountry);
  const indexDistrict = useSelector(selectIndexDistrict);
  const dispatch = useDispatch();

  const getNameCountryByIndex = React.useCallback(() => {
    if (indexCountry === -1) {
      return;
    }
    return Countries[indexCountry].name;
  }, [indexCountry]);

  const getNameDistrict = React.useCallback(() => {
    if (indexDistrict === -1) {
      return;
    }
    return provinces[indexCountry].districts[indexDistrict].name;
  }, [indexDistrict, indexCountry]);

  const checkParams = () => {
    if (!name || !sdt || !addressText || indexCountry === -1 || indexDistrict === -1 || !nameAddress) {
      return false;
    }
    return true;
  };

  const handleAddNewAddress = async () => {
    let data = {
      country: indexCountry,
      district: indexDistrict,
      nameAddress,
      nameUser: name,
      sdtUser: sdt,
      addressText,
      accessToken: 'empty',
    };

    let res = await addNewAddressUser(data);
    console.log(res);
    if (res?.errCode === 0) {
      getListAddressUser();
      navigation.goBack();
    }
  };

  const getListAddressUser = async () => {
    let res = await getListAddressUserServices();
    if (res?.errCode === 0) {
      dispatch(setListAddressUser(res.data));
    }
  };

  return (
    <ScrollView style={styles.NewAddress_container}>
      <Text style={styles.NewAddress_title}>Liên hệ</Text>
      <TextInput label="Tên địa chỉ" value={nameAddress} onChangeText={text => setNameAddress(text)} mode="outlined" />
      <TextInput label="Họ và tên" value={name} onChangeText={text => setName(text)} mode="outlined" />
      <TextInput label="Số điện thoại" value={sdt} onChangeText={text => setSdt(text)} mode="outlined" />
      <Text style={styles.NewAddress_title}>Địa chỉ</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseCountry')}>
        <View style={styles.NewAddress_country}>
          <Text style={[styles.NewAddress_country_text, { color: indexCountry !== -1 ? '#000' : '#ccc' }]}>
            {indexCountry !== -1 ? getNameCountryByIndex() : 'Tỉnh/thành phố'}
          </Text>
          <Icon name="right" size={16} color={'#000'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseDistrict')} disabled={indexCountry === -1}>
        <View style={[styles.NewAddress_country, { borderWidth: indexCountry === -1 ? 0 : 1 }]}>
          <Text style={[styles.NewAddress_country_text, { color: indexDistrict !== -1 ? '#000' : '#ccc' }]}>
            {indexDistrict !== -1 ? getNameDistrict() : 'Quận/Huyện'}
          </Text>
          <Icon name="right" size={16} color={'#000'} />
        </View>
      </TouchableOpacity>
      <TextInput
        label="Tên đường, Tòa nhà, Số nhà."
        value={addressText}
        onChangeText={text => setAddressText(text)}
        mode="outlined"
      />
      <Text style={styles.NewAddress_title}>Cài đặt</Text>
      <View style={styles.NewAddress_setting}>
        <Text style={styles.NewAddress_setting_text}>Đặt làm địa chỉ mặt định</Text>
        <Switch
        //   value={true}
        // onValueChange={onToggleSwitch}
        />
      </View>
      <Button mode="contained" onPress={() => handleAddNewAddress()} disabled={!checkParams()}>
        HOÀN THÀNH
      </Button>
    </ScrollView>
  );
};

export default NewAddress;
