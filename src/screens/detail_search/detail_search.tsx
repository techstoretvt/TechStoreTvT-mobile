/* eslint-disable prettier/prettier */
import { View, ScrollView } from 'react-native';
import React from 'react';

import styles from './detail_search_styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderHome from '../../components/header_home/header_home';
import { typeProdutView } from '../../utils/interface';
import Card_product from '../../components/card_product/card_product';

const defaultListSuggestProduct_item: typeProdutView = {
  id: 'empty',
  nameProduct: 'string',
  priceProduct: 'string',
  contentHTML: 'string',
  sold: 0,
  isSell: 'string',
  trademark: {
    nameTrademark: 'string',
    nameTrademarkEn: 'string',
    idTypeProduct: 'string',
  },
  promotionProducts: [
    {
      idProduct: 'string',
      timePromotion: 0,
      numberPercent: 0,
    },
  ],
  'imageProduct-product': [
    {
      idProduct: 'string',
      STTImage: 0,
      imagebase64: 'string',
    },
  ],
  'classifyProduct-product': [
    {
      id: 'string',
      idProduct: 'string',
      amount: 0,
      STTImg: 0,
      nameClassifyProduct: 'string',
      priceClassify: 0,
    },
  ],
  typeProduct: {
    nameTypeProduct: 'string',
    nameTypeProductEn: 'string',
    imageTypeProduct: 'string',
    stt: 0,
  },
};

const defaultListSuggestProduct: typeProdutView[] = [
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
];

const DetailSearch = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  const [listProduct, setListProduct] = React.useState<typeProdutView[]>(defaultListSuggestProduct);
  return (
    <View style={[styles.DetailSearch_container]}>
      <View style={[styles.DetailSearch_header, { marginTop: insets.top }]}>
        <HeaderHome navigation={navigation} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.DetailSearch_listProduct}>
          {listProduct?.map((item: any, index: number) => (
            <View key={item.id + index} style={styles.DetailSearch_listProduct_item}>
              <Card_product data={item} navigation={navigation} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailSearch;
