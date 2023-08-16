/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './purchase_from_styles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getListBillByType } from '../../services/api';
import { formatNumberToThousands } from '../../utils/common';

const typeBill = [
  {
    name: 'Chờ xác nhận',
    id: 1,
  },
  {
    name: 'Đang giao',
    id: 2,
  },
  {
    name: 'Đã giao',
    id: 3,
  },
  {
    name: 'Đã hủy',
    id: 4,
  },
  {
    name: 'Tất cả',
    id: 5,
  },
];

const ItemBill = ({ data }: { data: any }) => {
  const getStatusBill = (id: number) => {
    if (id > 2 && id < 3) {
      id = 2;
    }
    return typeBill?.find(item => item.id === id)?.name;
  };

  const getImageProduct = () => {
    if (!data) {
      return 'https://source.unsplash.com/random?sig=1';
    }
    let detailBill = data.detailBills[0];
    let product = detailBill.product;
    if (detailBill.classifyProduct.nameClassifyProduct === 'default') {
      return product['imageProduct-product'][0].imagebase64;
    }

    let img = 'https://source.unsplash.com/random?sig=1';
    product['imageProduct-product'].forEach((item: any) => {
      if (item.STTImage === detailBill.classifyProduct.STTImg) {
        img = item.imagebase64;
      }
    });

    return img;
  };

  const checkClassify = () => {
    let detailBill = data.detailBills[0];
    if (detailBill.classifyProduct.nameClassifyProduct === 'default') {
      return false;
    }
    return true;
  };

  const checkPromotion = () => {
    if (!data) {
      return false;
    }
    let promotion = data.detailBills[0].product.promotionProducts[0];
    let now = new Date().getTime();
    if (promotion.numberPercent === 0 || promotion.timePromotion < now) {
      return false;
    }
    return true;
  };

  const getRootPrice = () => {
    let detailBill = data.detailBills[0];
    if (!checkClassify()) {
      return +detailBill.product.priceProduct;
    }
    return +detailBill.classifyProduct.priceClassify;
  };

  const getCurrentPrice = () => {
    let rootPrice = getRootPrice();
    if (!checkPromotion()) {
      return rootPrice;
    }
    let price = Math.floor((rootPrice * (100 - data.detailBills[0].product.promotionProducts[0].numberPercent)) / 100);
    return price;
  };

  return (
    <View style={styles.PurchaseFrom_listBill_item}>
      <View style={styles.PurchaseFrom_listBill_item_top}>
        <Text style={styles.PurchaseFrom_listBill_item_top_codeBill}>{data.id}</Text>
        <Text style={styles.PurchaseFrom_listBill_item_top_status}>{getStatusBill(data.idStatusBill)}</Text>
      </View>
      <View style={styles.PurchaseFrom_listBill_item_product}>
        <Image source={{ uri: getImageProduct() }} style={styles.PurchaseFrom_listBill_item_product_image} />
        <View style={styles.PurchaseFrom_listBill_item_product_content}>
          <Text style={styles.PurchaseFrom_listBill_item_product_content_name} numberOfLines={2} ellipsizeMode="tail">
            {data.detailBills[0].product.nameProduct}
          </Text>
          <View style={styles.PurchaseFrom_listBill_item_product_content_classify}>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_classify_text}>
              {checkClassify() && `  Phan loai: ${data.detailBills[0].classifyProduct.nameClassifyProduct}`}
            </Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_classify_amount}>
              {'x' + data.detailBills[0].amount}
            </Text>
          </View>
          <View style={styles.PurchaseFrom_listBill_item_product_content_price}>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_promotion}>
              {checkPromotion() && 'Giảm ' + data.detailBills[0].product.promotionProducts[0].numberPercent + '%'}
              {!checkPromotion() && 'Giá gốc'}
            </Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_root}>
              {checkPromotion() && formatNumberToThousands(getRootPrice()) + '₫'}
            </Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_current}>
              {formatNumberToThousands(getCurrentPrice()) + '₫'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.PurchaseFrom_listBill_item_more}>
          <Text style={styles.PurchaseFrom_listBill_item_more_text}>Xem chi tiết</Text>
          <Icon name="right" size={20} color={'#333'} />
        </View>
      </TouchableOpacity>
      <View style={styles.PurchaseFrom_listBill_item_btns}>
        {data.idStatusBill === 1 && (
          <>
            <View style={{ flex: 2 }}>{/* <Button title="Hủy đơn hàng" /> */}</View>
            <View style={{ flex: 1 }}>
              <Button title="Hủy đơn" color={'red'} />
            </View>
          </>
        )}
        {data.idStatusBill >= 2 && data.idStatusBill < 3 && (
          <>
            <View style={{ flex: 2 }}>
              <Button title="Đã nhận hàng" color="red" disabled={data.idStatusBill !== 2.99} />
            </View>
            <View style={{ flex: 1 }}>{/* <Button title="Xem chi tiết" /> */}</View>
          </>
        )}
        {data.idStatusBill === 3 && (
          <>
            <View style={{ flex: 2 }}>
              <Button title="Mua lại" />
            </View>
            <View style={{ flex: 1 }}>
              <Button title="Đánh giá" color={'red'} />
            </View>
          </>
        )}
        {data.idStatusBill === 4 && (
          <>
            <View style={{ flex: 2 }}>
              <Button title="Mua lại" />
            </View>
            <View style={{ flex: 1 }}>{/* <Button title="Đánh giá" color={'red'} /> */}</View>
          </>
        )}
      </View>
    </View>
  );
};

const PurchaseFrom = ({ route, navigation }: { navigation: any; route: any }) => {
  const insets = useSafeAreaInsets();
  const { idTypeBill } = route.params;
  const [listBill, setListBill] = React.useState<any | null>([]);

  React.useEffect(() => {
    getListBill(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTypeBill]);

  const funcGoBackHeader = () => {
    navigation.navigate('HomeStack', { screen: 'Home' });
  };

  const onChangeIdTypeBill = (id: number) => {
    navigation.setParams({
      idTypeBill: id,
    });
  };

  const getListBill = async (offset: number) => {
    let res = await getListBillByType(idTypeBill, offset);
    if (res?.errCode === 0) {
      setListBill(res.data);
    }
  };

  return (
    <>
      <View style={[styles.PurchaseFrom_container, { marginTop: insets.top }]}>
        <HeaderPurchase title="Đơn mua" goBack={funcGoBackHeader} />
        <ScrollView horizontal={true} style={styles.PurchaseFrom_tabBar}>
          {typeBill?.map(item => (
            <TouchableOpacity key={item.id} onPress={() => onChangeIdTypeBill(item.id)}>
              <Text
                style={[
                  styles.PurchaseFrom_tabBar_text,
                  { borderBottomColor: idTypeBill === item.id ? 'red' : '#fff' },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView style={styles.PurchaseFrom_listBill}>
          {listBill?.map((item: any) => (
            <ItemBill key={item.id} data={item} />
          ))}
          {listBill?.length === 0 && <Text>Chưa có đơn hàng nào</Text>}
        </ScrollView>
      </View>
    </>
  );
};

export default PurchaseFrom;
