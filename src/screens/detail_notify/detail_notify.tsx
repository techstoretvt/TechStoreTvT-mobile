/* eslint-disable prettier/prettier */
import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';

import styles from './detail_notify_styles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';
import { getListNotidyByType } from '../../services/api';

const DetailNotify = ({ route }: { route: any }) => {
  const [listNotify, setListNotify] = React.useState<any | null>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getListNotify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  const getListNotify = async () => {
    setLoading(true);
    let page = listNotify.length === 0 ? 1 : Math.floor(listNotify.length / 20);
    let res = await getListNotidyByType({
      accessToken: 'empty',
      type: route.params.type,
      page: page,
    });
    if (res?.errCode === 0) {
      if (page === 1) {
        setListNotify(res.data);
      } else {
        let newArr = [...listNotify, ...res.data];
        setListNotify(newArr);
      }
      setLoading(false);
    }
  };

  const getMoreList = () => {
    getListNotify();
  };

  return (
    <View style={styles.DetailNotify_container}>
      <HeaderPurchase title={route.params.title} goBack={null} />
      {listNotify.length === 0 && !loading && <Text>Không có thông báo nào gần đây.</Text>}
      {listNotify.length === 0 && loading && <Text>Đang tải dữ liệu.</Text>}

      <FlatList
        data={listNotify}
        keyExtractor={(item, index) => index + item.id}
        renderItem={({ item }) => (
          <View style={styles.DetailNotify_listNotify_item}>
            <Image
              source={{ uri: item.urlImage || 'https://source.unsplash.com/random?sig=1' }}
              style={styles.DetailNotify_listNotify_item_image}
            />
            <View style={styles.DetailNotify_listNotify_item_wrap}>
              <Text style={styles.DetailNotify_listNotify_item_wrap_title}>{item.title}</Text>
              <Text style={styles.DetailNotify_listNotify_item_wrap_content}>{item.content}</Text>
            </View>
          </View>
        )}
        onEndReached={getMoreList}
      />
    </View>
  );
};

export default DetailNotify;
