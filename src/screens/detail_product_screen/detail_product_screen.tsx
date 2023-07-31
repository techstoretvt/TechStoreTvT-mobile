/* eslint-disable prettier/prettier */
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import ImageView from 'react-native-image-viewing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge, AirbnbRating } from '@rneui/themed';
import RenderHtml from 'react-native-render-html';

import styles from './detail_product_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';

const images = [
  {
    uri: 'https://source.unsplash.com/random?sig=1',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=2',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=3',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=4',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=5',
  },
];

const DetailProductScreen = () => {
  const insets = useSafeAreaInsets();

  const [openLightBox, setOpenLightBox] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      keyboardVerticalOffset={10}
    >
      <ScrollView>
        <View style={styles.DetailProduct_container}>
          <FocusAwareStatusBar translucent backgroundColor="transparent" />
          <View style={[styles.header, { paddingTop: insets.top }]}>
            <View style={styles.header_goBack}>
              <Icon name="arrow-left" size={20} color="#fff" />
            </View>
            <View style={styles.header_wrapIcon}>
              <View style={styles.header_wrapIcon_icon}>
                <Icon name="share" size={20} color="#fff" />
              </View>
              <View style={styles.header_wrapIcon_icon}>
                <Icon name="cart-plus" size={26} color="#fff" />
                <Badge
                  value={10}
                  status="error"
                  // eslint-disable-next-line react-native/no-inline-styles
                  containerStyle={{
                    position: 'absolute',
                    top: -6,
                    right: -8,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={[styles.wrapImages]}>
            <Swiper
              showsButtons={false}
              horizontal={true}
              dotColor="#fff"
              showsPagination={true}
              // eslint-disable-next-line react-native/no-inline-styles
              paginationStyle={{
                bottom: 4,
              }}
              loop={false}
            >
              <Image source={{ uri: 'https://source.unsplash.com/random?sig=1' }} style={styles.wrapImages_image} />
              <Image source={{ uri: 'https://source.unsplash.com/random?sig=2' }} style={styles.wrapImages_image} />
              <Image source={{ uri: 'https://source.unsplash.com/random?sig=3' }} style={styles.wrapImages_image} />
            </Swiper>
          </View>
          <View style={styles.content}>
            <View style={styles.content_nameProduct}>
              <Text style={styles.content_nameProduct_text}>
                Ten san pham la abc Ten san pham la abc Ten san pham la abc Ten san pham la abc Ten san
              </Text>
            </View>
            <View style={styles.content_wrapStatus}>
              <View style={styles.content_status}>
                <Text style={styles.content_status_title}>Tình trạng:</Text>
                <Text style={styles.content_status_content}>Đang bán</Text>
              </View>
              <View style={styles.content_wrapStatus_separate} />
              <View style={styles.content_trademark}>
                <Text style={styles.content_trademark_title}>Thương hiệu:</Text>
                <Text style={styles.content_trademark_content}>Asus</Text>
              </View>
            </View>
            <View style={styles.content_evaluate}>
              {/* <View style={styles.content_evaluate_empty}>
              <Text style={styles.content_evaluate_empty_text}>Chưa có đánh giá</Text>
            </View> */}
              <View style={styles.content_evaluate_wrap}>
                <View style={styles.content_evaluate_wrap_star}>
                  <Text style={styles.content_evaluate_wrap_star_text}>4.5</Text>
                  <View style={styles.content_evaluate_wrap_star_icon}>
                    <AirbnbRating isDisabled={true} defaultRating={4} size={16} showRating={false} />
                  </View>
                </View>
                <View style={styles.content_wrapStatus_separate} />
                <View style={styles.content_evaluate_wrap_text}>
                  <Text style={styles.content_evaluate_wrap_text_number}>5</Text>
                  <Text style={styles.content_evaluate_wrap_text_title}>Đánh giá</Text>
                </View>
                <View style={styles.content_wrapStatus_separate} />
                <View style={styles.content_evaluate_wrap_text}>
                  <Text style={styles.content_evaluate_wrap_text_number}>5</Text>
                  <Text style={styles.content_evaluate_wrap_text_title}>Đã bán</Text>
                </View>
              </View>
            </View>
            <View style={styles.content_price}>
              <View style={styles.content_price_current}>
                <Text style={styles.content_price_current_text}>d400.000</Text>
              </View>
              <View style={styles.content_priceRoot}>
                <Text style={styles.content_priceRoot_price}>d800.000</Text>
                <Text style={styles.content_priceRoot_persent}>-50%</Text>
              </View>
            </View>
            <View style={styles.content_classify}>
              <View style={styles.content_classify_left}>
                <Text style={styles.content_classify_left_title}>Phân loại:</Text>
                <Text style={styles.content_classify_left_amount}>Kho: 30</Text>
              </View>
              <View style={styles.content_classify_right}>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
                <View style={styles.content_classify_right_item}>
                  <Text style={styles.content_classify_right_item_text}>Xanh</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.introduces}>
            <View style={styles.introduces_wrapText}>
              <Text style={styles.introduces_wrapText_title}>Chính sách bán hàng</Text>
              <View style={styles.introduces_wrapText_listItem}>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-1.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Cam kết 100% chính hãng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-2.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Miễn phí giao hàng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-3.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Hỗ trợ 24/7</Text>
                </View>
              </View>
            </View>
            <View style={styles.introduces_wrapText}>
              <Text style={styles.introduces_wrapText_title}>Thông tin thêm</Text>
              <View style={styles.introduces_wrapText_listItem}>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-4.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Hoàn tiền 111% nếu hàng giã</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-5.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Mở hợp kiểm tra nhận hàng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-6.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Đổi trả trong 7 ngày</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.discription}>
            <Text style={styles.discription_title}>Mô tả sản phẩm</Text>
            <View style={styles.discription_content}>
              <Text>mo ta san pham</Text>
              <RenderHtml
                contentWidth={300}
                source={{
                  html: `
      <p style='text-align:center;'>
        Hello World!
      </p>`,
                }}
              />
            </View>
          </View>

          <ImageView
            images={images}
            imageIndex={2}
            visible={openLightBox}
            onRequestClose={() => setOpenLightBox(false)}
            presentationStyle="overFullScreen"
            // backgroundColor="yellow"
            // eslint-disable-next-line react/no-unstable-nested-components, react-native/no-inline-styles
            FooterComponent={() => <Text style={{ color: '#fff' }}>1/6</Text>}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DetailProductScreen;
