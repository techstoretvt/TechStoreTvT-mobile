/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';

import styles from './login_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';
import { nameApp } from '../../utils/constant';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const indexImage = React.useMemo(() => {
    let num = Math.floor(Math.random() * 20) + 1;
    console.log('Image: ', num);
    return num;
  }, []);

  const handleLogin = async () => {
    console.log('vao');
  };

  return (
    <ImageBackground
      source={{ uri: `https://source.unsplash.com/random?sig=${indexImage}` }}
      style={styles.LoginScreen_container}
    >
      <FocusAwareStatusBar />
      <View style={styles.LoginScreen_content}>
        <Text style={styles.LoginScreen_content_title}>{nameApp}</Text>
        <View style={styles.LoginScreen_content_form}>
          <TextInput label="Email" value={email} onChangeText={text => setEmail(text)} mode="flat" error={false} />
          <View style={styles.LoginScreen_content_form_wrapPassword}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              mode="flat"
              right={<TextInput.Icon icon="eye" />}
              render={props => <NativeTextInput {...props} secureTextEntry={true} />}
            />
            <Text style={styles.LoginScreen_content_form_wrapPassword_text}>Quên mật khẩu?</Text>
          </View>
          <View style={styles.LoginScreen_content_form_btnLogin}>
            <Button
              //   icon="camera"
              mode="contained"
              onPress={handleLogin}
              loading={true}
            >
              Đăng nhập
            </Button>
          </View>
          <View style={styles.LoginScreen_content_form_btnRegister}>
            <Button mode="outlined" onPress={() => console.log('Pressed')} textColor="#fff">
              Đăng ký
            </Button>
          </View>
        </View>
        <Text style={styles.LoginScreen_content_or}>or</Text>
        <View style={styles.LoginScreen_content_formLoginSocials}>
          <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')} textColor="#fff">
            Đăng nhập với Google
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
