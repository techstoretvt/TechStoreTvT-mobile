/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  payment_container: {
    flex: 1,
    backgroundColor: '#ccc',
    // padding: 10,
    width: windowWidth,
  },
  payment_address: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 6,
    flexDirection: 'row',
    paddingVertical: 10,

    justifyContent: 'space-between',
  },
  payment_address_left: {
    paddingHorizontal: 4,
  },
  payment_address_center: {
    flex: 1,
    paddingHorizontal: 6,
  },
  payment_address_center_title: {
    color: '#000',
    fontSize: 15,
    marginBottom: 6,
  },
  payment_address_center_text: {
    color: '#000',
  },
  payment_address_right: {
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  payment_listProduct: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  payment_listProduct_item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginTop: 10,
  },
  payment_listProduct_item_Image: {
    width: 90,
    height: 90,
  },
  payment_listProduct_item_content: {
    padding: 6,
    flex: 1,
  },
  payment_listProduct_item_content_name: {
    color: '#000',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  payment_listProduct_item_content_classift: {
    marginTop: 6,
  },
  payment_listProduct_item_content_price: {
    marginTop: 6,
    fontSize: 16,
  },
  payment_message: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  payment_message_title: {
    color: '#000',
    fontSize: 16,
  },
  payment_message_input: {},
  payment_totals: {
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  payment_totals_title: {
    color: '#000',
    fontSize: 16,
  },
  payment_totals_price: {
    color: 'red',
    fontWeight: '900',
    fontSize: 16,
  },
  payment_methobs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginTop: 6,
    gap: 6,
  },
  payment_methobs_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payment_methobs_title_text: {
    color: '#000',
    fontSize: 16,
    marginLeft: 6,
  },
  payment_methobs_right: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 4,
    justifyContent: 'flex-end',
  },
  payment_methobs_right_text: {
    color: '#000',
    marginRight: 4,
  },
  payment_details: {
    backgroundColor: '#fff',
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  payment_details_title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  payment_details_title_text: {
    color: '#000',
    fontSize: 15,
  },
  payment_details_group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payment_details_totals: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  payment_details_totals_title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  payment_details_totals_price: {
    fontSize: 16,
    fontWeight: '900',
    color: 'red',
  },
  payment_dieukhoang: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginTop: 6,
  },
  payment_dieukhoang_text: {
    marginLeft: 6,
    flex: 1,
  },
  payment_footer: {
    marginTop: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    paddingVertical: 10,
  },
  payment_footer_left: {
    alignItems: 'flex-end',
  },
  payment_footer_left_title: {
    color: '#000',
    fontSize: 16,
  },
  payment_footer_left_price: {
    color: 'red',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default styles;
