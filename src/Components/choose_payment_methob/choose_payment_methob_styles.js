/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ChoosePaymentMethob_container: {
    flex: 1,
  },
  ChoosePaymentMethob_title: {
    padding: 10,
  },
  ChoosePaymentMethob_listMethob: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ChoosePaymentMethob_listMethob_item: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  ChoosePaymentMethob_listMethob_item_left: {},
  ChoosePaymentMethob_listMethob_item_right: {},
  ChoosePaymentMethob_listMethob_item_right_title: {
    color: '#000',
    fontSize: 16,
  },
  ChoosePaymentMethob_listMethob_item_right_sub: {},
  ChoosePaymentMethob_btn: {
    padding: 10,
  },
});

export default styles;
