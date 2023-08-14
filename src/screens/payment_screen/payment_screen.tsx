/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import styles from './payment_screen_styles';
import { getListCartUserService, getListAddressUserServices, createNewBillByHand } from '../../services/api';
import { formatNumberToThousands } from '../../utils/common';
import { setListAddressUser } from '../../store/appReducer';
import { selectListAddressUser, selectPaymentMethob } from '../../store/selectors';

const PaymentScreen = ({ navigation }: { navigation: any }) => {
  let dispatch = useDispatch();
  const listAddressUser = useSelector(selectListAddressUser);
  const paymentMethob = useSelector(selectPaymentMethob);

  const [listProduct, setListProduct] = React.useState<any | null>(null);
  const [addressDefault, setAddressDefault] = React.useState<any>(null);

  React.useEffect(() => {
    getListProduct();
    getListAddressUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (listAddressUser) {
      let arr = listAddressUser.find((item: any) => item.isDefault === 'true');
      setAddressDefault(arr);
    }
  }, [listAddressUser]);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
  //     console.log('vao', e.data.action);
  //     e.preventDefault();

  //   });

  //   return unsubscribe;
  // }, [navigation]);

  const getListProduct = async () => {
    let res = await getListCartUserService();
    if (res?.errCode === 0) {
      let arr = res.data.filter((item: any) => item.isChoose === 'true');
      setListProduct(arr);
    }
  };

  const getListAddressUser = async () => {
    let res = await getListAddressUserServices();
    if (res?.errCode === 0) {
      dispatch(setListAddressUser(res.data));
    }
  };

  const getImageProduct = (product: any) => {
    if (product.classifyProduct.nameClassifyProduct === 'default') {
      return product.product['imageProduct-product'][0].imagebase64;
    }
    product.product['imageProduct-product'].forEach((item: any) => {
      if (item.STTImage === product.classifyProduct.STTImg) {
        return item.imagebase64;
      }
    });
    return product.product['imageProduct-product'][0].imagebase64;
  };

  const getCurrentPriceProduct = (item: any) => {
    let rootPrice = 0;
    if (item.classifyProduct.nameClassifyProduct === 'default') {
      rootPrice = +item.product.priceProduct;
    } else {
      rootPrice = +item.classifyProduct.priceClassify;
    }

    let now = new Date().getTime();
    let promotion = item.product.promotionProducts[0];
    if (!promotion || promotion.numberPercent === 0 || promotion.timePromotion < now) {
      return rootPrice;
    } else {
      return (rootPrice * (100 - promotion.numberPercent)) / 100;
    }
  };

  const getTotal = () => {
    if (!listProduct) {
      return 0;
    }
    let kq = listProduct.reduce((count: number, item: any) => count + getCurrentPriceProduct(item) * item.amount, 0);
    return kq;
  };

  const handeBuy = async () => {
    if (paymentMethob.name === 'hand') {
      let res = await createNewBillByHand({
        accessToken: 'empty',
        Totals: getTotal(),
      });
      console.log(res);
      if (res?.errCode === 0) {
        console.log('Success!');
        navigation.navigate('PurchaseFrom');
      } else {
        Alert.alert('Thất bại', res?.errMessage || 'Error');
      }
    }
  };

  return (
    <View style={styles.payment_container}>
      <ScrollView style={styles.scrollview}>
        {addressDefault && (
          <TouchableOpacity style={styles.payment_address} onPress={() => navigation.navigate('ChooseAddress')}>
            <View style={styles.payment_address_left}>
              <Icon name="location" size={16} color={'#000'} />
            </View>
            <View style={styles.payment_address_center}>
              <Text style={styles.payment_address_center_title}>Địa chỉ nhận hàng</Text>
              <Text style={styles.payment_address_center_text}>
                {addressDefault.fullname} | {addressDefault.sdt}
              </Text>
              <Text style={styles.payment_address_center_text}>{addressDefault.addressText}</Text>
              <Text style={styles.payment_address_center_text}>xá mỹ khánh, huyện phong điền</Text>
            </View>
            <View style={styles.payment_address_right}>
              <Icon name="chevron-thin-right" size={16} color={'#000'} />
            </View>
          </TouchableOpacity>
        )}
        {!addressDefault && (
          <TouchableOpacity style={styles.payment_address} onPress={() => navigation.navigate('ChooseAddress')}>
            <View style={styles.payment_address_left}>
              <Icon name="location" size={16} color={'red'} />
            </View>
            <View style={styles.payment_address_center}>
              <Text style={{ textDecorationLine: 'underline' }}>
                Vui long chon dua chi nhan hang <Text style={{ color: 'red' }}>*</Text>
              </Text>
            </View>
            <View style={styles.payment_address_right}>
              <Icon name="chevron-thin-right" size={16} color={'red'} />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.payment_listProduct}>
          {listProduct?.map((item: any) => (
            <View key={item.id} style={styles.payment_listProduct_item}>
              <Image source={{ uri: getImageProduct(item) }} style={styles.payment_listProduct_item_Image} />
              <View style={styles.payment_listProduct_item_content}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.payment_listProduct_item_content_name}>
                  {item.product.nameProduct}
                </Text>
                {item?.classifyProduct?.nameClassifyProduct !== 'default' && (
                  <Text style={styles.payment_listProduct_item_content_classift}>
                    Phân loại: {item.classifyProduct.nameClassifyProduct}
                  </Text>
                )}
                <Text>x{item.amount}</Text>
                <Text style={styles.payment_listProduct_item_content_price}>
                  {formatNumberToThousands(getCurrentPriceProduct(item) * item.amount) + 'd'}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.payment_message}>
          <Text style={styles.payment_message_title}>Tin nhắn:</Text>
          <View style={styles.payment_message_input}>
            <TextInput placeholder="Lưu ý cho người bán..." />
          </View>
        </View>
        <View style={styles.payment_totals}>
          <Text style={styles.payment_totals_title}>Tống số tiền (3 sản phẩm)</Text>
          <Text style={styles.payment_totals_price}>{formatNumberToThousands(getTotal()) + 'd'}</Text>
        </View>
        <View style={styles.payment_methobs}>
          <View style={styles.payment_methobs_title}>
            <Icon2 name="payment" size={20} color={'red'} />
            <Text style={styles.payment_methobs_title_text}>Phương thức thanh toán</Text>
          </View>
          <TouchableOpacity
            style={styles.payment_methobs_right}
            onPress={() => navigation.navigate('ChoosePaymentMethob')}>
            <Text style={styles.payment_methobs_right_text}>{paymentMethob.title}</Text>
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
            <Text>{formatNumberToThousands(getTotal()) + 'd'}</Text>
          </View>
          <View style={styles.payment_details_group}>
            <Text>Tổng chi phí vận chuyển:</Text>
            <Text>0d</Text>
          </View>
          <View style={styles.payment_details_group}>
            <Text>Giảm giá vận chuyển:</Text>
            <Text>0d</Text>
          </View>
          <View style={styles.payment_details_totals}>
            <Text style={styles.payment_details_totals_title}>Tổng thanh toán</Text>
            <Text style={styles.payment_details_totals_price}>{formatNumberToThousands(getTotal()) + 'd'}</Text>
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
          <Text style={styles.payment_footer_left_price}>{formatNumberToThousands(getTotal()) + 'd'}</Text>
        </View>
        <Button mode="contained" onPress={() => handeBuy()}>
          Đặt hàng
        </Button>
      </View>
    </View>
  );
};

export default PaymentScreen;
