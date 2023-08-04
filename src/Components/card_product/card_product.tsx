/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Skeleton } from '@rneui/themed';

import styles from './card_product_styles';
import { typeProdutView } from '../../utils/interface';
import { formatNumber, formatNumberToThousands } from '../../utils/common';

interface propsTypes {
  data: typeProdutView;
  navigation: any;
}

const CardProduct = ({ data, navigation }: propsTypes) => {
  const checkPromotion = (promotion: { timePromotion: number; numberPercent: number }) => {
    if (!promotion) {
      return false;
    }

    if (promotion.numberPercent === 0) {
      return false;
    }
    let now = new Date().getTime();
    if (now > promotion.timePromotion) {
      return false;
    }
    return true;
  };

  const getRootPrice = () => {
    if (
      !data['classifyProduct-product'] ||
      !data['classifyProduct-product'][0] ||
      !data['classifyProduct-product'][0].nameClassifyProduct ||
      data['classifyProduct-product'][0].nameClassifyProduct === 'default'
    ) {
      return +data.priceProduct;
    }

    return data['classifyProduct-product'][0].priceClassify;
  };

  const getCurrentPrice = () => {
    let rootPrice = getRootPrice();
    let isPromotion = checkPromotion(data.promotionProducts[0]);
    if (!isPromotion) {
      return rootPrice;
    }
    let price = (rootPrice * (100 - data.promotionProducts[0].numberPercent)) / 100;
    return price;
  };

  if (!data || data.id === 'empty') {
    return (
      <View>
        <Skeleton animation="wave" height={160} />
        <Skeleton animation="wave" height={28} style={{ marginVertical: 4 }} />
        <Skeleton animation="wave" height={20} />
      </View>
    );
  }

  return (
    <View style={styles.CardProduct_container}>
      <TouchableOpacity
        onPress={() =>
          navigation.push('DetailProduct', {
            idProduct: data?.id,
          })
        }
      >
        <ImageBackground
          style={styles.CardProduct_container_wrapImage}
          source={{
            uri: data && data['imageProduct-product'] && data['imageProduct-product'][0].imagebase64,
          }}
        >
          <View style={styles.CardProduct_container_wrapImage_logo}>
            <Image
              style={styles.CardProduct_container_wrapImage_logo_image}
              source={{
                uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Flogo%2Flogo-full.webp&w=128&q=75',
              }}
            />
          </View>
          <View style={styles.CardProduct_container_wrapImage_like}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#fff',
                fontWeight: '800',
              }}
            >
              Yêu thích
            </Text>
          </View>
          {data && data.promotionProducts && checkPromotion(data.promotionProducts[0]) && (
            <View style={styles.CardProduct_container_wrapImage_promotion}>
              <Text style={styles.CardProduct_container_wrapImage_promotion_text1}>Giảm</Text>
              <Text style={styles.CardProduct_container_wrapImage_promotion_text2}>
                {data.promotionProducts[0].numberPercent}
              </Text>
            </View>
          )}
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.CardProduct_container_trademark}>
        <Text style={styles.CardProduct_container_trademark_text}>{data?.trademark?.nameTrademark}</Text>
      </View>
      <View style={styles.CardProduct_container_nameProduct}>
        <TouchableOpacity
          onPress={() =>
            navigation.push('DetailProduct', {
              idProduct: data?.id,
            })
          }
        >
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.CardProduct_container_nameProduct_text}>
            {data?.nameProduct}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CardProduct_container_priceCurrent}>
        <Text style={styles.CardProduct_container_priceCurrent_text}>
          {data && formatNumberToThousands(getCurrentPrice()) + '₫'}
        </Text>
      </View>
      <View style={styles.CardProduct_container_pricePromotion}>
        <Text style={styles.CardProduct_container_pricePromotion_text}>
          {data?.promotionProducts[0] &&
            checkPromotion(data?.promotionProducts[0]) &&
            formatNumberToThousands(getRootPrice()) + '₫'}
        </Text>
      </View>
      <View style={styles.CardProduct_container_sale}>
        <Text style={styles.CardProduct_container_sale_text}>Đã bán</Text>
        <Text style={styles.CardProduct_container_sale_text}>{data && formatNumber(data.sold)}</Text>
      </View>
    </View>
  );
};

export default React.memo(CardProduct);
