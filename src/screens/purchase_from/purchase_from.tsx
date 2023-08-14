/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './purchase_from_styles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ItemBill = () => {
  return (
    <View style={styles.PurchaseFrom_listBill_item}>
      <View style={styles.PurchaseFrom_listBill_item_top}>
        <Text style={styles.PurchaseFrom_listBill_item_top_codeBill}>abdhef abdhef abdhef abdhef</Text>
        <Text style={styles.PurchaseFrom_listBill_item_top_status}>Cho xac nhan</Text>
      </View>
      <View style={styles.PurchaseFrom_listBill_item_product}>
        <Image
          source={{ uri: 'https://source.unsplash.com/random?sig=1' }}
          style={styles.PurchaseFrom_listBill_item_product_image}
        />
        <View style={styles.PurchaseFrom_listBill_item_product_content}>
          <Text style={styles.PurchaseFrom_listBill_item_product_content_name} numberOfLines={2} ellipsizeMode="tail">
            ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham ten san pham
          </Text>
          <View style={styles.PurchaseFrom_listBill_item_product_content_classify}>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_classify_text}>Phan loai: apple</Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_classify_amount}>x1</Text>
          </View>
          <View style={styles.PurchaseFrom_listBill_item_product_content_price}>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_promotion}>giam 33%</Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_root}>400.000d</Text>
            <Text style={styles.PurchaseFrom_listBill_item_product_content_price_current}>300.000d</Text>
          </View>
        </View>
      </View>
      <View style={styles.PurchaseFrom_listBill_item_more}>
        <Text style={styles.PurchaseFrom_listBill_item_more_text}>Xem chi tiết</Text>
        <Icon name="right" size={20} color={'#333'} />
      </View>
      <View style={styles.PurchaseFrom_listBill_item_btns}>
        <View style={{ flex: 2 }}>
          <Button title="Mua lại" />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Đánh giá" color={'red'} />
        </View>
      </View>
    </View>
  );
};

const PurchaseFrom = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  const funcGoBackHeader = () => {
    navigation.navigate('HomeStack', { screen: 'Home' });
  };

  return (
    <>
      <View style={[styles.PurchaseFrom_container, { marginTop: insets.top }]}>
        <HeaderPurchase title="Đơn mua" goBack={funcGoBackHeader} />
        <ScrollView horizontal={true} style={styles.PurchaseFrom_tabBar}>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={[styles.PurchaseFrom_tabBar_text, { borderBottomColor: 'red' }]}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
          <Text style={styles.PurchaseFrom_tabBar_text}>cho lay hang</Text>
        </ScrollView>
        <ScrollView style={styles.PurchaseFrom_listBill}>
          <ItemBill />
          <ItemBill />
          <ItemBill />
          <ItemBill />
        </ScrollView>
      </View>
    </>
  );
};

export default PurchaseFrom;
