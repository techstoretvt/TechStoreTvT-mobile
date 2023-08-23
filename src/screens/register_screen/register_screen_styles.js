/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  Register_container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  Register_form: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
  },
  Register_form_header: {},
  Register_form_header_title: {
    fontSize: 26,
    color: '#000',
    fontWeight: '700',
  },
  Register_form_header_sub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Register_form_header_sub_text: {},
  Register_form_field: {
    marginTop: 20,
  },
});

export default styles;
