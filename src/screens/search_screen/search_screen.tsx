/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';

import styles from './search_screen_styles';
import Card_product from '../../components/card_product/card_product';
import { typeProdutView } from '../../utils/interface';
import { getListKeyword, getSuggestProduct } from '../../services/api';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

const SearchScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  const [listProduct, setListProduct] = React.useState<typeProdutView[]>(defaultListSuggestProduct);
  const [valueSearch, setValueSearch] = React.useState('');
  const idTimeoutSearch = React.useRef<any>();
  const [listKeyWord, setListKeyWord] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getListSuggess();
  }, []);

  const getListSuggess = async () => {
    let res = await getSuggestProduct([]);
    // console.log(res);
    if (res?.errCode === 0) {
      setListProduct(res.data);
    }
  };

  const handleGetListKeyword = async (text: string) => {
    setLoading(true);
    let res = await getListKeyword({ value: text });
    console.log(res);
    setLoading(false);
    if (res?.errCode === 0) {
      setListKeyWord(res.data);
    }
  };

  const onSearch = async (text: string) => {
    setValueSearch(text);
    clearTimeout(idTimeoutSearch.current);

    idTimeoutSearch.current = setTimeout(() => {
      handleGetListKeyword(text);
    }, 500);
  };

  return (
    <View style={[styles.SearchScreen_container, { marginTop: insets.top }]}>
      <View style={styles.SearchScreen_header}>
        <TouchableOpacity style={styles.SearchScreen_header_left} onPress={() => navigation.goBack()}>
          <Icon name="arrow-long-left" size={24} color={'red'} />
        </TouchableOpacity>
        <View style={styles.SearchScreen_header_right}>
          <Searchbar
            placeholder="Search"
            onChangeText={text => onSearch(text)}
            value={valueSearch}
            elevation={4}
            loading={loading}
            onIconPress={() => navigation.push('DetailSearch', { keyword: valueSearch })}
            onSubmitEditing={() => navigation.push('DetailSearch', { keyword: valueSearch })}
          />
        </View>
      </View>
      {valueSearch === '' && (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.SearchScreen_listKeyword}>
            <TouchableOpacity onPress={() => navigation.push('DetailSearch', { keyword: 'Điện thoại samsung' })}>
              <Text style={styles.SearchScreen_listKeyword_text}>Điện thoại samsung</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('DetailSearch', { keyword: 'Laptop hp' })}>
              <Text style={styles.SearchScreen_listKeyword_text}>Laptop hp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('DetailSearch', { keyword: 'Tủ lạnh' })}>
              <Text style={styles.SearchScreen_listKeyword_text}>Tủ lạnh</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SearchScreen_suggestions}>
            <View style={styles.SearchScreen_suggestions_heaader}>
              <View style={styles.SearchScreen_suggestions_heaader_separate} />
              <Text style={styles.SearchScreen_suggestions_heaader_title}>Gợi ý hôm nay</Text>
              <View style={styles.SearchScreen_suggestions_heaader_separate} />
            </View>
            <View style={styles.SearchScreen_suggestions_list}>
              {listProduct?.map((item: any, index: number) => (
                <View key={item.id + index} style={styles.SearchScreen_suggestions_list_item}>
                  <Card_product data={item} navigation={navigation} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
      {valueSearch !== '' && (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.SearchScreen_listKeyword}>
            {listKeyWord?.map((item: any, index: number) => (
              <TouchableOpacity
                key={item.id + index}
                onPress={() => navigation.push('DetailSearch', { keyword: item.keyword })}>
                <Text style={styles.SearchScreen_listKeyword_text}>{item.keyword}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SearchScreen;
