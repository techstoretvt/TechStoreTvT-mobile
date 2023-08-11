/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';

import styles from './payment_screen_styles';

const PaymentScreen = () => {
  return (
    <View style={styles.payment_container}>
      <ScrollView style={styles.scrollview}>
        <TouchableOpacity style={styles.payment_address}>
          <View style={styles.payment_address_left}>
            <Icon name="location" size={16} color={'#000'} />
          </View>
          <View style={styles.payment_address_center}>
            <Text style={styles.payment_address_center_title}>Địa chỉ nhận hàng</Text>
            <Text style={styles.payment_address_center_text}>Trần Văn Thoại | 0987654321</Text>
            <Text style={styles.payment_address_center_text}>
              Nhà trọ phương thảo, điện máy thanh phong, đường bông vang
            </Text>
            <Text style={styles.payment_address_center_text}>xá mỹ khánh, huyện phong điền</Text>
          </View>
          <View style={styles.payment_address_right}>
            <Icon name="chevron-thin-right" size={16} color={'#000'} />
          </View>
        </TouchableOpacity>
        <View style={styles.payment_listProduct}>
          <View style={styles.payment_listProduct_item}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
              style={styles.payment_listProduct_item_Image}
            />
            <View style={styles.payment_listProduct_item_content}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.payment_listProduct_item_content_name}>
                ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham
                ten san pham ten san pham ten san pham
              </Text>
              <Text style={styles.payment_listProduct_item_content_classift}>Phân loại: Apple</Text>
              <Text style={styles.payment_listProduct_item_content_price}>400.000d</Text>
            </View>
          </View>
          <View style={styles.payment_listProduct_item}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
              style={styles.payment_listProduct_item_Image}
            />
            <View style={styles.payment_listProduct_item_content}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.payment_listProduct_item_content_name}>
                ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham
                ten san pham ten san pham ten san pham
              </Text>
              <Text style={styles.payment_listProduct_item_content_classift}>Phân loại: Apple</Text>
              <Text style={styles.payment_listProduct_item_content_price}>400.000d</Text>
            </View>
          </View>
          <View style={styles.payment_listProduct_item}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
              style={styles.payment_listProduct_item_Image}
            />
            <View style={styles.payment_listProduct_item_content}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.payment_listProduct_item_content_name}>
                ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham
                ten san pham ten san pham ten san pham
              </Text>
              <Text style={styles.payment_listProduct_item_content_classift}>Phân loại: Apple</Text>
              <Text style={styles.payment_listProduct_item_content_price}>400.000d</Text>
            </View>
          </View>
          <View style={styles.payment_listProduct_item}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
              style={styles.payment_listProduct_item_Image}
            />
            <View style={styles.payment_listProduct_item_content}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.payment_listProduct_item_content_name}>
                ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham
                ten san pham ten san pham ten san pham
              </Text>
              <Text style={styles.payment_listProduct_item_content_classift}>Phân loại: Apple</Text>
              <Text style={styles.payment_listProduct_item_content_price}>400.000d</Text>
            </View>
          </View>
        </View>
        <View style={styles.payment_message}>
          <Text style={styles.payment_message_title}>Tin nhắn:</Text>
          <View style={styles.payment_message_input}>
            <TextInput placeholder="Lưu ý cho người bán..." />
          </View>
        </View>
        <View style={styles.payment_totals}>
          <Text style={styles.payment_totals_title}>Tống số tiền (3 sản phẩm)</Text>
          <Text style={styles.payment_totals_price}>400.400d</Text>
        </View>
        <View style={styles.payment_methobs}>
          <View style={styles.payment_methobs_title}>
            <Icon2 name="payment" size={20} color={'red'} />
            <Text style={styles.payment_methobs_title_text}>Phương thức thanh toán</Text>
          </View>
          <TouchableOpacity style={styles.payment_methobs_right}>
            <Text style={styles.payment_methobs_right_text}>Thanh toán khi nhận hàng</Text>
            <Icon name="chevron-thin-right" size={14} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.payment_details}>
          <View style={styles.payment_details_title}>
            <Icon name="text-document-inverted" size={24} color={'red'} />
            <Text style={styles.payment_details_title_text}>Chi tiết thanh toán</Text>
          </View>
          <View style={styles.payment_details_group}>
            <Text>Tổng tiền hàng:</Text>
            <Text>63.000d</Text>
          </View>
          <View style={styles.payment_details_group}>
            <Text>Tổng chi phí vận chuyển:</Text>
            <Text>63.000d</Text>
          </View>
          <View style={styles.payment_details_group}>
            <Text>Giảm giá vận chuyển:</Text>
            <Text>63.000d</Text>
          </View>
          <View style={styles.payment_details_totals}>
            <Text style={styles.payment_details_totals_title}>Tổng thanh toán</Text>
            <Text style={styles.payment_details_totals_price}>90.000d</Text>
          </View>
        </View>
        <View style={styles.payment_dieukhoang}>
          <Icon name="text-document-inverted" size={24} color={'red'} />
          <Text style={styles.payment_dieukhoang_text}>
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
            <Text style={{ color: 'blue' }}>Điều khoản TechStoreTvT</Text>
          </Text>
        </View>
      </ScrollView>
      <View style={styles.payment_footer}>
        <View style={styles.payment_footer_left}>
          <Text style={styles.payment_footer_left_title}>Tổng thanh toán</Text>
          <Text style={styles.payment_footer_left_price}>69.000d</Text>
        </View>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Đặt hàng
        </Button>
      </View>
    </View>
  );
};

export default PaymentScreen;
