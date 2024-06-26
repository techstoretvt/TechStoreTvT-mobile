/* eslint-disable prettier/prettier */
import { View, FlatList, Text } from 'react-native';
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

interface productProps {
  item: typeProdutView;
}

const defaultListSuggestProduct: productProps[] = [
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
  { item: defaultListSuggestProduct_item },
];

const DetailSearch = ({ navigation, route }: { navigation: any; route: any }) => {
  const insets = useSafeAreaInsets();
  const [listProduct, setListProduct] = React.useState<productProps[]>(defaultListSuggestProduct);
  const [loading, setLoading] = React.useState(false);
  const [isEnd, setIsEnd] = React.useState(false);

  React.useEffect(() => {
    getListProduct(1, route.params.keyword);
    setIsEnd(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.keyword]);

  const getListProduct = async (page: any, keyword: string) => {
    setLoading(true);
    let res = await searchProduct({
      page: page,
      keyword: keyword,
      maxProduct: 10,
    });
    if (res?.errCode === 0) {
      if (listProduct.length === 8) {
        setListProduct(res.data);
      } else {
        let newArr = [...listProduct, ...res.data];
        setListProduct(newArr);
      }
      if (res.data.length === 0) {
        setIsEnd(true);
      }
    } else {
      if (res.status === 401) {
        navigation.navigate('Login');
      }
    }
    setLoading(false);
  };
  const getMoreList = () => {
    if (!isEnd) {
      let listLength = listProduct.length;
      let page = listLength === 8 ? 1 : listLength / 10 + 1;
      getListProduct(page, route.params.keyword);
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
        keyExtractor={(item: any, index: number) => index + item.item.id}
        renderItem={({ item }) => (
          <View style={styles.DetailSearch_listProduct_item}>
            <Card_product data={item.item} navigation={navigation} />
          </View>
        )}
        horizontal={false}
        numColumns={2}
        onEndReached={getMoreList}
      />
      {loading && <Text style={{ textAlign: 'center', paddingVertical: 10 }}>Loading...</Text>}
      {isEnd && <Text style={{ textAlign: 'center', paddingVertical: 10 }}>-- Hết --</Text>}
    </View>
  );
};

export default DetailSearch;
