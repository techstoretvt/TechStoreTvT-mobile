/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Switch, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './new_address_styles';

const NewAddress = () => {
  return (
    <ScrollView style={styles.NewAddress_container}>
      <Text style={styles.NewAddress_title}>Liên hệ</Text>
      <TextInput
        label="Họ và tên"
        //   value={'text'}
        //   onChangeText={text => setText(text)}
        mode="outlined"
      />
      <TextInput
        label="Số điện thoại"
        //   value={'text'}
        //   onChangeText={text => setText(text)}
        mode="outlined"
      />
      <Text style={styles.NewAddress_title}>Địa chỉ</Text>
      <TouchableOpacity>
        <View style={styles.NewAddress_country}>
          <Text style={styles.NewAddress_country_text}>Tỉnh/thành phố</Text>
          <Icon name="right" size={16} color={'#000'} />
        </View>
      </TouchableOpacity>
      <TextInput
        label="Tên đường, Tòa nhà, Số nhà."
        //   value={'text'}
        //   onChangeText={text => setText(text)}
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
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        HOÀN THÀNH
      </Button>
    </ScrollView>
  );
};

export default NewAddress;
