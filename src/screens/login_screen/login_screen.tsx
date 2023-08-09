/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import styles from './login_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';
import { nameApp } from '../../utils/constant';
import { userLoginService } from '../../services/api';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isErrorEmail, setIsErrorEmail] = React.useState(false);
  const [isErrorPassword, setIsErrorPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // AsyncStorage.removeItem('accessToken');
    // AsyncStorage.removeItem('refreshToken');
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '1051226548375-224relhu5ls2roroco5d16ccsrc0ssn6.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120,
    });
  }, []);

  const indexImage = React.useMemo(() => {
    let num = Math.floor(Math.random() * 20) + 1;
    console.log('Image: ', num);
    return num;
  }, []);

  const handleLogin = async () => {
    // const accToken = await AsyncStorage.getItem('accessToken');

    let check = checkParams();
    if (!check) {
      return;
    }
    setLoading(true);
    let res = await userLoginService({ email, pass: password });
    // console.log(res);
    if (res?.errCode === 0) {
      setLoading(false);
      await AsyncStorage.setItem('accessToken', res.data.accessToken);
      await AsyncStorage.setItem('refreshToken', res.data.refreshToken);
      navigation.navigate('HomeStack', { screen: 'Home' });
    } else {
      setMessage(res?.errMessage);
      setLoading(false);
    }
  };

  const checkParams = () => {
    let check = false;
    if (!password) {
      setIsErrorPassword(true);
      check = true;
    }
    if (!email) {
      setIsErrorEmail(true);
      check = true;
    }

    if (check) {
      setMessage('Vui lòng điền đầy đủ thông tin');
      return false;
    }
    return true;
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
    setIsErrorEmail(false);
    if (password) {
      setMessage('');
    }
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
    setIsErrorPassword(false);
    if (email) {
      setMessage('');
    }
  };

  const handleLoginGoogle = async () => {
    console.log('vao');
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      console.log('aaaaa');

      const userInfo = await GoogleSignin.signIn();
      console.log('userInfor: ', userInfo);
    } catch (error) {
      console.log('error: ', error);

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };

  return (
    <ImageBackground
      source={{ uri: `https://source.unsplash.com/random?sig=${indexImage}` }}
      style={styles.LoginScreen_container}
    >
      <FocusAwareStatusBar />
      <View style={styles.LoginScreen_content}>
        <Text style={styles.LoginScreen_content_title}>{nameApp}</Text>
        <Text style={styles.LoginScreen_content_message}>{message}</Text>
        <View style={styles.LoginScreen_content_form}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => onChangeEmail(text)}
            mode="flat"
            error={isErrorEmail}
          />
          <View style={styles.LoginScreen_content_form_wrapPassword}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={text => onChangePassword(text)}
              mode="flat"
              error={isErrorPassword}
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
              loading={loading}
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
          <Button icon="camera" mode="outlined" onPress={handleLoginGoogle} textColor="#fff">
            Đăng nhập với Google
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
