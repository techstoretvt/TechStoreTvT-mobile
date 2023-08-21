/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  MyAccount_container: {
    flex: 1,
    borderWidth: 1,
  },
  MyAccount_header: {
    backgroundColor: '#3F51D9',
  },
  MyAccount_header_top: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    padding: 10,
  },
  MyAccount_header_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  MyAccount_header_bottom_avt: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  MyAccount_header_bottom_content: {
    alignItems: 'flex-start',
  },
  MyAccount_header_bottom_content_name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  MyAccount_header_bottom_content_type: {
    backgroundColor: 'violet',
    borderRadius: 10,
    color: '#333',
    paddingHorizontal: 10,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  MyAccount_header_bottom_content_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  MyAccount_bill: {
    marginTop: 4,
    backgroundColor: '#fff',
  },
  MyAccount_bill_top: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  MyAccount_bill_top_title: {
    color: '#000',
    fontSize: 16,
    flex: 1,
  },
  MyAccount_bill_top_sub: {
    color: '#333',
  },
  MyAccount_bill_bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    paddingVertical: 20,
  },
  MyAccount_bill_bottom_wrap: {
    alignItems: 'center',
    flex: 1,
  },
  MyAccount_bill_bottom_wrap_title: {
    marginTop: 10,
    color: '#000',
  },
});

export default styles;
