/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import styles from './choose_payment_methob_styles';
import { selectPaymentMethob } from '../../store/selectors';
import { setPaymentMethob } from '../../store/appReducer';
import MarkUpdate from '../mark_update/mark_update';

const listMethobs = [
  {
    title: 'Thanh toán khi nhận hàng',
    sub: 'Phí thu hộ: 0 vnd. Ưu đãi về phí vận chuyển (nếu cố) áp dụng với cả phí thu hộ.',
    nameIcon: 'gift',
    nameMethob: 'hand',
  },
  {
    title: 'Paypal',
    sub: 'Phí thu hộ: 0 vnd. Ưu đãi về phí vận chuyển (nếu cố) áp dụng với cả phí thu hộ.',
    nameIcon: 'paypal',
    nameMethob: 'card',
  },
];

const ChoosePaymentMethob = ({ navigation }: { navigation: any }) => {
  const paymentMethob = useSelector(selectPaymentMethob);
  const dispatch = useDispatch();

  const handleChangMethoc = (item: any) => {
    dispatch(
      setPaymentMethob({
        name: item.nameMethob,
        title: item.title,
      }),
    );
  };

  return (
    <View style={styles.ChoosePaymentMethob_container}>
      <Text style={styles.ChoosePaymentMethob_title}>Loại thanh toán</Text>
      <View style={styles.ChoosePaymentMethob_listMethob}>
        {listMethobs?.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => handleChangMethoc(item)} disabled={index === 1}>
              <View
                style={[
                  styles.ChoosePaymentMethob_listMethob_item,
                  { borderColor: paymentMethob.name === item.nameMethob ? 'red' : '#ccc' },
                ]}>
                <View style={styles.ChoosePaymentMethob_listMethob_item_left}>
                  <Icon name={item.nameIcon} size={25} color={'red'} />
                </View>
                <View style={styles.ChoosePaymentMethob_listMethob_item_right}>
                  <Text style={styles.ChoosePaymentMethob_listMethob_item_right_title}>{item.title}</Text>
                  <Text style={styles.ChoosePaymentMethob_listMethob_item_right_sub}>{item.sub}</Text>
                </View>
              </View>
              {index === 1 && <MarkUpdate />}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.ChoosePaymentMethob_btn}>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          ĐỒNG Ý
        </Button>
      </View>
    </View>
  );
};

export default ChoosePaymentMethob;
