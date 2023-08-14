/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  PurchaseFrom_container: {
    flex: 1,
  },
  PurchaseFrom_tabBar: {
    backgroundColor: '#fff',
    maxHeight: 40,
  },
  PurchaseFrom_tabBar_text: {
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  PurchaseFrom_listBill: {
    flex: 1,
    marginTop: 10,
  },
  PurchaseFrom_listBill_item: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  PurchaseFrom_listBill_item_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PurchaseFrom_listBill_item_top_codeBill: {
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
    maxWidth: 200,
    textTransform: 'uppercase',
  },
  PurchaseFrom_listBill_item_top_status: {
    color: 'red',
  },
  PurchaseFrom_listBill_item_product: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  PurchaseFrom_listBill_item_product_image: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
  },
  PurchaseFrom_listBill_item_product_content: {
    flex: 1,
  },
  PurchaseFrom_listBill_item_product_content_name: {
    color: '#000',
  },
  PurchaseFrom_listBill_item_product_content_classify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  PurchaseFrom_listBill_item_product_content_classify_text: {},
  PurchaseFrom_listBill_item_product_content_classify_amount: {},
  PurchaseFrom_listBill_item_product_content_price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  PurchaseFrom_listBill_item_product_content_price_promotion: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    marginRight: 'auto',
  },
  PurchaseFrom_listBill_item_product_content_price_root: {
    textDecorationLine: 'line-through',
  },
  PurchaseFrom_listBill_item_product_content_price_current: {
    marginLeft: 6,
    color: 'red',
  },
  PurchaseFrom_listBill_item_more: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  PurchaseFrom_listBill_item_more_text: {
    color: 'green',
  },
  PurchaseFrom_listBill_item_btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    gap: 6,
  },
});

export default styles;
