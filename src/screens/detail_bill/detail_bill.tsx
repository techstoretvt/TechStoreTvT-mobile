/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import Timeline from 'react-native-timeline-flatlist';

import styles from './detail_bill_sytles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Product_payment } from '../payment_screen/payment_screen';
import { getDetailBill, rePurchaseBill } from '../../services/api';

const DetailBill = ({ route, navigation }: { route: any; navigation: any }) => {
  const insets = useSafeAreaInsets();
  const params = route.params;

  const [infoBill, setInfoBill] = React.useState<any | null>(null);
  const [detailBills, setDetailBills] = React.useState<any | null>(null);
  const [address, setAddress] = React.useState<any | null>(null);
  const [dataTimeLine, setDataTimeLine] = React.useState<any | null>(null);

  React.useEffect(() => {
    console.log('idBill: ', params.idBill);
    if (!params.idBill) {
      navigation.popToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    funcGetDetailBill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.idBill]);

  const funcGetDetailBill = async () => {
    let res = await getDetailBill({
      idBill: params.idBill,
    });
    if (res?.errCode === 0) {
      let dataRes = res.data;
      setDetailBills(dataRes.detailBills);
      setAddress(dataRes.addressUser);

      let datetimeline = dataRes.statusBills;
      for (let i = 0; i < datetimeline.length - 1; i++) {
        for (let j = i + 1; j < datetimeline.length; j++) {
          if (datetimeline[i].idStatusBill < datetimeline[j].idStatusBill) {
            let tam = datetimeline[i];
            datetimeline[i] = datetimeline[j];
            datetimeline[j] = tam;
          }
        }
      }

      datetimeline = datetimeline.map((item: any) => {
        let date = new Date(item.timeStatus);
        let source =
          item.idStatusBill >= 3
            ? require('../../assets/images/DetailBill/success.jpg')
            : require('../../assets/images/DetailBill/circle_timeline.jpg');
        return {
          time: date.getHours() + ':' + date.getMinutes(),
          title: item.nameStatus,
          description: `Ngày: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
          icon: <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={source} />,
        };
      });
      datetimeline.push({
        time: 'start',
        title: 'Bắt đầu',
        description: '',
        icon: (
          <Image
            style={{ width: 20, height: 20, borderRadius: 50 }}
            source={require('../../assets/images/DetailBill/circle_timeline.jpg')}
          />
        ),
      });
      setDataTimeLine(datetimeline);

      delete dataRes.detailBills;
      delete dataRes.statusBills;
      delete dataRes.addressUser;
      setInfoBill(dataRes);
    }
  };

  const handleRePurcharBill = async () => {
    let res = await rePurchaseBill({
      accessToken: 'empty',
      id: params.idBill,
    });
    if (res?.errCode === 0) {
      navigation.navigate('Cart');
    }
  };

  return (
    <View style={[styles.DetailBill_container, { marginTop: insets.top }]}>
      <HeaderPurchase title="Thông tin đơn hàng" goBack={null} />
      <ScrollView>
        {infoBill?.idStatusBill === 3 && (
          <View style={styles.DetailBill_succeed}>
            <View style={styles.DetailBill_succeed_left}>
              <Text style={styles.DetailBill_succeed_left_title}>Đơn hàng đã hoàn thành</Text>
              <Text style={styles.DetailBill_succeed_left_sub}>
                Đánh giá sản phẩm theo trải nghiệm của bạn để giúp chúng tôi có thêm kinh nghiệm nhé! xin cảm ơn.
              </Text>
            </View>
            <View style={styles.DetailBill_succeed_right}>
              <Icon name="checklist" size={60} color={'#fff'} />
            </View>
          </View>
        )}
        <View style={styles.DetailBill_statusBill}>
          <View style={styles.DetailBill_statusBill_icon}>
            <Icon name="checklist" size={20} color={'#000'} />
          </View>
          <View style={styles.DetailBill_statusBill_wrap}>
            <Text style={styles.DetailBill_statusBill_wrap_title}>Thông tin vận chuyển</Text>
            <View style={[styles.DetailBill_statusBill_wrap_listStatus]}>
              {dataTimeLine && (
                <Timeline
                  data={dataTimeLine}
                  circleSize={20}
                  circleColor="rgb(45,156,219)"
                  lineColor="rgb(45,156,219)"
                  timeStyle={{
                    textAlign: 'center',
                    backgroundColor: '#ff9797',
                    color: 'white',
                    padding: 5,
                    borderRadius: 13,
                  }}
                  descriptionStyle={{ color: 'gray' }}
                  innerCircle={'icon'}
                  isUsingFlatlist={false}
                  // style={{ height: data.length * 70 }}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.DetailBill_address}>
          <View style={styles.DetailBill_address_icon}>
            <Icon name="checklist" size={20} color={'#000'} />
          </View>
          <View style={styles.DetailBill_address_wrap}>
            <Text style={styles.DetailBill_address_wrap_title}>Địa chỉ nhận hàng</Text>
            <Text style={styles.DetailBill_address_wrap_name}>{address?.fullname}</Text>
            <Text style={styles.DetailBill_address_wrap_sdt}>{address?.sdt}</Text>
            <Text style={styles.DetailBill_address_wrap_addressText}>{address?.addressText}</Text>
            <Text style={styles.DetailBill_address_wrap_country}>my khanh - can tho</Text>
          </View>
        </View>
        <View style={styles.DetailBill_listProduct}>
          {detailBills?.map((item: any) => (
            <View key={item.id}>
              <Product_payment item={item} />
              <View style={{ alignItems: 'flex-end', paddingRight: 10 }}>
                <Button
                  title={item.isReviews === 'true' ? 'Đã đánh giá' : 'Đánh giá'}
                  color={'red'}
                  onPress={() =>
                    navigation.navigate('EvaluateScreen', {
                      idDetailBill: item.id,
                    })
                  }
                />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.DetailBill_totals}>
          <View style={styles.DetailBill_totals_wrap}>
            <Text style={styles.DetailBill_totals_wrap_title}>Tổng tiền hàng</Text>
            <Text style={styles.DetailBill_totals_wrap_text}>500.000</Text>
          </View>
          <View style={styles.DetailBill_totals_wrap}>
            <Text style={styles.DetailBill_totals_wrap_title}>Phí vận chuyển</Text>
            <Text style={styles.DetailBill_totals_wrap_text}>500.000</Text>
          </View>
          <View style={styles.DetailBill_totals_wrap}>
            <Text style={styles.DetailBill_totals_wrap_title}>Giảm giá phí vận chuyển</Text>
            <Text style={styles.DetailBill_totals_wrap_text}>500.000</Text>
          </View>
          <View style={styles.DetailBill_totals_wrap}>
            <Text style={[styles.DetailBill_totals_wrap_title, { fontWeight: '700', fontSize: 16 }]}>Thành tiền</Text>
            <Text
              style={[
                styles.DetailBill_totals_wrap_text,
                {
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'red',
                },
              ]}>
              1.550.000
            </Text>
          </View>
        </View>
        <View style={styles.DetailBill_methob}>
          <View style={styles.DetailBill_methob_left}>
            <Icon name="checklist" size={20} color={'red'} />
          </View>
          <View style={styles.DetailBill_methob_right}>
            <Text style={styles.DetailBill_methob_right_title}>Phương thức thanh toán</Text>
            <Text style={styles.DetailBill_methob_right_text}>
              {infoBill?.payment === 'hand' ? 'Thanh toán khi nhận hàng' : 'Thanh toán bằng Paypal'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.DetailBill_btns}>
        <View style={{ flex: 1 }}>
          <Button title="Mua lại" disabled={infoBill?.idStatusBill < 3} onPress={handleRePurcharBill} />
        </View>
        {/* <View style={{ flex: 1 }}>
          <Button title="Đánh giá" color="red" disabled={infoBill?.idStatusBill !== 3} />
        </View> */}
      </View>
    </View>
  );
};

export default DetailBill;
