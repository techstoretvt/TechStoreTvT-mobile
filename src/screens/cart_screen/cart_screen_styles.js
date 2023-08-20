/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  CartScreen_container: {
    flex: 1,
    position: 'relative',
  },
  CartScreen_listProduct: {
    flex: 1,
    backgroundColor: '#ccc',
    marginBottom: 60,
  },
  CartScreen_listProduct_product: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 6,
  },
  CartScreen_listProduct_product_checkbox: {
    // backgroundColor: 'red',
    width: 35,
  },
  CartScreen_listProduct_product_wrap: {
    flexDirection: 'row',
  },
  CartScreen_listProduct_product_wrap_image: {
    width: 90,
    height: 90,
    backgroundColor: '#ccc',
  },
  CartScreen_listProduct_product_wrap_content: {
    marginLeft: 6,
    width: windowWidth - 90 - 35 - 16,
  },
  CartScreen_listProduct_product_wrap_content_name: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  CartScreen_listProduct_product_wrap_content_classify: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    marginTop: 6,
    alignItems: 'center',
    padding: 4,
  },
  CartScreen_listProduct_product_wrap_content_classify_text: {
    color: '#000',
    marginRight: 6,
  },
  CartScreen_listProduct_product_wrap_content_wrapPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    padding: 4,
  },
  CartScreen_listProduct_product_wrap_content_wrapPrice_root: {
    textDecorationLine: 'line-through',
  },
  CartScreen_listProduct_product_wrap_content_wrapPrice_current: {
    fontSize: 16,
    color: 'red',
    fontWeight: '700',
    marginLeft: 6,
  },
  CartScreen_listProduct_product_wrap_content_amount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  CartScreen_listProduct_product_wrap_content_amount_input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 3,
    paddingHorizontal: 20,
  },
  modal_changeCart: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 200,
  },
  modal_changeCart_overlay: {
    backgroundColor: '#00000090',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: -1,
  },
  modal_changeCart_btnClose: {
    position: 'absolute',
    top: 6,
    right: 6,
    zIndex: 1,
  },
  modal_changeCart_top: {
    flexDirection: 'row',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modal_changeCart_top_image: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
  },
  modal_changeCart_top_wrap: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  modal_changeCart_top_wrap_price: {
    color: 'red',
    fontWeight: '600',
    fontSize: 15,
  },
  modal_changeCart_top_wrap_amount: {},
  modal_changeCart_classify: {
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modal_changeCart_classify_title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  modal_changeCart_classify_list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 4,
  },
  modal_changeCart_classify_item: {
    backgroundColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 6,
    color: '#000',
  },
  modal_changeCart_wrapAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modal_changeCart_wrapAmount_title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  modal_changeCart_wrapAmount_groupBtns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal_changeCart_wrapAmount_groupBtns_input: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  CartScreen_footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 10,
  },
  CartScreen_footer_all: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  CartScreen_footer_all_text: {
    fontSize: 12,
  },
  CartScreen_footer_totals: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: 150,
  },
  CartScreen_footer_totals_title: {
    color: '#000',
  },
  CartScreen_footer_totals_price: {
    color: 'red',
    fontWeight: '600',
  },
  CartScreen_footer_btnBuy: {
    // width: 140,
  },
});

export default styles;
