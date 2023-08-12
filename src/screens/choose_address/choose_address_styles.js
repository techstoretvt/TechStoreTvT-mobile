/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ChooseAdress_container: {
    flex: 1,
  },
  ChooseAdress_title: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 15,
  },
  ChooseAdress_listAddress: {},
  ChooseAdress_listAddress_item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    marginBottom: 6,
  },
  ChooseAdress_listAddress_item_left: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'flex-start',
  },
  ChooseAdress_listAddress_item_center: {
    flex: 1,
  },
  ChooseAdress_listAddress_item_center_nameAdress: {
    color: '#000',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  ChooseAdress_listAddress_item_center_nameAndSdt: {},

  ChooseAdress_listAddress_item_center_addressText: {},
  ChooseAdress_listAddress_item_center_country: {},
  ChooseAdress_listAddress_item_right: {
    color: 'red',
    fontSize: 16,
  },
  ChooseAdress_addUserAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  ChooseAdress_addUserAddress_left: {},
  ChooseAdress_addUserAddress_right: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;
