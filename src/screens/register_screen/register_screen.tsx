/* eslint-disable prettier/prettier */
import { View, Text, Alert, TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';

import styles from './register_screen_styles';
import { registerUser } from '../../services/api';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [rePass, setRePass] = React.useState('');

  const handleLogin = async () => {
    if (!firstName || !lastName || !email || !pass || !rePass) {
      Alert.alert('Cảnh báo', 'Bạn chưa điền đủ thông tin kìa :)');
      return;
    }
    if (pass !== rePass) {
      Alert.alert('Cảnh báo', 'Mật khẩu nhập lại không trừng khớp !');
      return;
    }

    let data = {
      firstName,
      lastName,
      email,
      password: pass,
    };

    let res = await registerUser(data);
    console.log('sing up', res);
    if (res?.errCode === 0) {
      console.log('success');
      navigation.navigate('VerifyRegisterScreen', { email: email });
    } else {
      Alert.alert('Cảnh báo', res?.errMessage || 'Có lỗi xảy ra vui lòng thử lại sau');
    }
  };

  return (
    <View style={styles.Register_container}>
      <View style={styles.Register_form}>
        <View style={styles.Register_form_header}>
          <Text style={styles.Register_form_header_title}>Đăng ký tài khoản</Text>
          <View style={styles.Register_form_header_sub}>
            <Text style={styles.Register_form_header_sub_text}>Bạn đã có tài khoản?</Text>
            <Button mode="text" onPress={() => navigation.navigate('Login')}>
              Đăng nhập
            </Button>
          </View>
        </View>
        <View style={styles.Register_form_field}>
          <TextInput
            label="Họ"
            value={lastName}
            onChangeText={text => setLastName(text)}
            placeholder="Nhập họ của bạn"
            mode="outlined"
          />
          <View style={{ marginTop: 10 }} />
          <TextInput
            label="Tên"
            value={firstName}
            onChangeText={text => setFirstName(text)}
            placeholder="Nhập tên của bạn"
            mode="outlined"
          />
          <View style={{ marginTop: 10 }} />
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Nhập email"
            mode="outlined"
          />
          <View style={{ marginTop: 10 }} />
          <TextInput
            label="Mật khẩu"
            value={pass}
            onChangeText={text => setPass(text)}
            placeholder="Nhập mật khẩu"
            mode="outlined"
            render={props => <NativeTextInput {...props} secureTextEntry={true} />}
          />
          <View style={{ marginTop: 10 }} />
          <TextInput
            label="Xác nhận mật khẩu"
            value={rePass}
            onChangeText={text => setRePass(text)}
            placeholder="Nhập lại mật khẩu"
            mode="outlined"
            render={props => <NativeTextInput {...props} secureTextEntry={true} />}
          />
        </View>
        <View style={{ marginTop: 40 }} />
        <Button mode="contained" onPress={() => handleLogin()}>
          Đăng ký
        </Button>
      </View>
    </View>
  );
};

export default RegisterScreen;
