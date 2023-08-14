/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  HeaderPurchase_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  HeaderPurchase_goBack: {
    marginLeft: 10,
  },
  HeaderPurchase_title: {
    flex: 1,
    marginLeft: 20,
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
  },
  HeaderPurchase_right: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginRight: 16,
  },
  HeaderPurchase_right_notify: {},
});

export default styles;
