/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  NewAddress_container: {
    flex: 1,
  },
  NewAddress_title: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  NewAddress_country: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 6,
  },
  NewAddress_country_text: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },
  NewAddress_setting: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  NewAddress_setting_text: {
    color: '#000',
    marginLeft: 10,
  },
});

export default styles;
