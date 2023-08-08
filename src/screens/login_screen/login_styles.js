/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  LoginScreen_container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginScreen_content: {
    width: windowWidth - 40,
    backgroundColor: '#00000095',
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  LoginScreen_content_title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
  },
  LoginScreen_content_message: {
    color: 'red',
    marginTop: 50,
    textAlign: 'center',
  },
  LoginScreen_content_form: {
    marginTop: 20,
  },
  LoginScreen_content_form_wrapPassword: {
    marginTop: 20,
  },
  LoginScreen_content_form_wrapPassword_text: {
    color: '#fff',
    textAlign: 'right',
    marginTop: 6,
  },
  LoginScreen_content_form_btnLogin: {
    marginTop: 30,
  },
  LoginScreen_content_form_btnRegister: {
    marginTop: 20,
  },
  LoginScreen_content_or: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  LoginScreen_content_formLoginSocials: {
    marginTop: 20,
  },
});

export default styles;
