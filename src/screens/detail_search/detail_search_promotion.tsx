/* eslint-disable prettier/prettier */
import { View, FlatList } from 'react-native';
import React from 'react';

import styles from './detail_search_styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderHome from '../../components/header_home/header_home';
import { typeProdutView } from '../../utils/interface';
import Card_product from '../../components/card_product/card_product';
import { searchProduct } from '../../services/api';

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

const DetailSearchPromotion = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  const [listProduct, setListProduct] = React.useState<typeProdutView[]>(defaultListSuggestProduct);

  React.useEffect(() => {
    getListProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListProduct = async () => {
    let res = await searchProduct({
      page: 1,
      promotion: 'true',
      maxProduct: 10,
    });
    if (res?.errCode === 0) {
      if (listProduct.length === 8) {
        setListProduct(res.data);
      } else {
        let newArr = [...listProduct, ...res.data];
        setListProduct(newArr);
      }
    } else {
      if (res.status === 401) {
        navigation.navigate('Login');
      }
    }
  };

  return (
    <View style={[styles.DetailSearch_container]}>
      <View style={[styles.DetailSearch_header, { marginTop: insets.top }]}>
        <HeaderHome navigation={navigation} iconBack={true} />
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={listProduct}
        keyExtractor={(item: any, index: number) => index + item.id}
        renderItem={({ item }) => (
          <View style={styles.DetailSearch_listProduct_item}>
            <Card_product data={item} navigation={navigation} />
          </View>
        )}
        horizontal={false}
        numColumns={2}
        // onEndReached={getMoreList}
      />
    </View>
  );
};

export default DetailSearchPromotion;
