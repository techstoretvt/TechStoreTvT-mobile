/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  SettingAccount_container: {
    flex: 1,
  },
  SettingAccount_group: {
    marginTop: 10,
  },
  SettingAccount_group_title: {
    padding: 10,
  },
  SettingAccount_group_list: {},
  SettingAccount_group_list_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 14,
  },
  SettingAccount_group_list_text: {
    color: '#000',
    fontSize: 16,
  },
});

export default styles;
