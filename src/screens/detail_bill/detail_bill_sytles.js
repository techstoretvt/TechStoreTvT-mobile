/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  DetailBill_container: {
    flex: 1,
  },
  DetailBill_succeed: {
    backgroundColor: '#01BD9D',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    gap: 20,
  },
  DetailBill_succeed_left: {
    flex: 1,
  },
  DetailBill_succeed_left_title: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 16,
  },
  DetailBill_succeed_left_sub: {
    color: '#fff',
    marginTop: 6,
  },
  DetailBill_succeed_right: {},
  DetailBill_statusBill: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  DetailBill_statusBill_icon: {},
  DetailBill_statusBill_wrap: {
    flex: 1,
  },
  DetailBill_statusBill_wrap_title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  DetailBill_statusBill_wrap_listStatus: {
    paddingVertical: 10,
  },
  DetailBill_address: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 6,
  },
  DetailBill_address_icon: {},
  DetailBill_address_wrap: {
    flex: 1,
  },
  DetailBill_address_wrap_title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  DetailBill_address_wrap_name: {
    marginTop: 10,
  },
  DetailBill_address_wrap_sdt: {},
  DetailBill_address_wrap_addressText: {},
  DetailBill_address_wrap_country: {},
  DetailBill_listProduct: {
    backgroundColor: '#fff',
    marginTop: 6,
  },
  DetailBill_totals: {
    backgroundColor: '#fff',
    marginTop: 6,
  },
  DetailBill_totals_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  DetailBill_totals_wrap_title: {
    color: '#000',
  },
  DetailBill_totals_wrap_text: {
    color: '#000',
  },
  DetailBill_methob: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 6,
    backgroundColor: '#fff',
  },
  DetailBill_methob_left: {},
  DetailBill_methob_right: {},
  DetailBill_methob_right_title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  DetailBill_methob_right_text: {
    marginTop: 6,
    color: '#000',
  },
  DetailBill_btns: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 2,
  },
});

export default styles;
