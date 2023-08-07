/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  DetailProduct_container: {
    flex: 1,
    // backgroundColor: 'aqua',
  },
  header: {
    position: 'absolute',
    // backgroundColor: 'green',
    zIndex: 1,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  header_goBack: {
    backgroundColor: '#6E698090',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  header_wrapIcon: {
    flexDirection: 'row',
  },
  header_wrapIcon_icon: {
    backgroundColor: '#6E698090',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginRight: 14,
  },
  wrapImages: {
    aspectRatio: 1 / 0.9,
  },
  wrapImages_image: {
    height: '100%',
    backgroundColor: '#000',
  },
  content: {
    padding: 6,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  content_nameProduct: {},
  content_nameProduct_text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  content_wrapStatus: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  content_wrapStatus_separate: {
    width: 1,
    height: 16,
    borderLeftWidth: 1,
    marginHorizontal: 10,
  },
  content_status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_status_title: {},
  content_status_content: {
    color: 'orange',
    fontWeight: '800',
    fontSize: 15,
    marginLeft: 10,
  },
  content_trademark: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_trademark_title: {},
  content_trademark_content: {
    color: 'orange',
    fontWeight: '800',
    fontSize: 15,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  content_evaluate: {},
  content_evaluate_empty: {},
  content_evaluate_empty_text: {
    color: '#333',
  },
  content_evaluate_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_evaluate_wrap_star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_evaluate_wrap_star_text: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  content_evaluate_wrap_star_icon: {
    marginLeft: 4,
  },
  content_evaluate_wrap_text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content_evaluate_wrap_text_number: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  content_evaluate_wrap_text_title: {
    marginLeft: 4,
  },
  content_price: {
    marginTop: 10,
  },
  content_price_current: {},
  content_price_current_text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'red',
  },
  content_priceRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  content_priceRoot_price: {
    textDecorationLine: 'line-through',
  },
  content_priceRoot_persent: {
    marginLeft: 6,
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    paddingHorizontal: 4,
  },
  content_classify: {
    flexDirection: 'row',
    marginTop: 14,
  },
  content_classify_left: {},
  content_classify_left_title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  content_classify_left_amount: {},
  content_classify_right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 14,
    flexWrap: 'wrap',
  },
  content_classify_right_item: {
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 6,
    paddingVertical: 4,
    margin: 4,
  },
  content_classify_right_item_text: {
    color: 'orange',
  },
  introduces: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 6,
    paddingBottom: 10,
  },
  introduces_wrapText: {
    marginTop: 20,
  },
  introduces_wrapText_title: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
  },
  introduces_wrapText_listItem: {
    marginTop: 3,
    marginLeft: 10,
  },
  introduces_wrapText_listItem_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  introduces_wrapText_listItem_item_image: {
    width: 20,
    height: 20,
  },
  introduces_wrapText_listItem_item_text: {
    marginLeft: 10,
    color: '#000',
  },
  discription: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  discription_title: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    textDecorationLine: 'underline',
  },
  discription_content: {
    marginTop: 10,
    height: 200,
    overflow: 'hidden',
  },
  discription_more: {
    alignItems: 'center',
  },
  discription_more_text: {
    color: 'red',
    borderTopWidth: 1,
    paddingHorizontal: 20,
  },
  evaluate: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
  },
  evaluate_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  evaluate_header_left: {},
  evaluate_header_left_title: {
    color: '#000',
    fontSize: 17,
    fontWeight: '700',
  },
  evaluate_header_left_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  evaluate_header_left_wrap_star: {},
  evaluate_header_left_wrap_persent: {
    marginHorizontal: 4,
    color: 'red',
  },
  evaluate_header_left_wrap_amount: {},
  evaluate_header_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluate_header_right_more: {
    color: 'red',
    marginRight: 4,
  },
  evaluate_header_right_icon: {},
  evaluate_list: {},
  evaluate_list_group: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 6,
  },
  evaluate_list_avatar: {
    marginRight: 10,
  },
  evaluate_list_content: {
    flex: 1,
  },
  evaluate_list_content_name: {
    color: '#000',
    fontWeight: '600',
  },
  evaluate_list_content_star: {
    marginLeft: -4,
    marginTop: 4,
    flexDirection: 'row',
  },
  evaluate_list_content_trademark: {
    marginTop: 4,
  },
  evaluate_list_content_text: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  evaluate_list_content_media: {
    marginTop: 6,
  },
  evaluate_list_content_media_wrapVideo: {
    backgroundColor: '#333',
    marginRight: 6,
  },
  evaluate_list_content_media_wrapVideo_video: {
    width: 100,
    height: 100,
  },
  evaluate_list_content_media_listImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluate_list_content_media_listImage_image: {
    width: 100,
    height: 100,
    marginRight: 6,
    flexShrink: 0,
  },
  evaluate_more: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  evaluate_more_text: {
    color: 'red',
    marginRight: 6,
  },
  suggestions: {
    marginTop: 20,
  },
  suggestions_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestions_header_sparate: {
    width: 50,
    borderBottomWidth: 1,
  },
  suggestions_header_text: {
    fontWeight: '700',
    color: '#000',
    fontSize: 16,
    marginHorizontal: 10,
  },
  suggestions_listProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 200,
    marginTop: 10,
  },
  suggestions_listProduct_item: {
    width: '50%',
    minHeight: 100,
    padding: 6,
  },
});

export default styles;
