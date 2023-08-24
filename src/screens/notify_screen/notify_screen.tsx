/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import styles from './notify_screen_styles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';

const NotifyScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.Notify_container}>
      <HeaderPurchase title="Thông báo" goBack={null} showIcon={false} navigation={navigation} />
      <View style={styles.NotifyScreen_list}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailNotify', { title: 'Khuyễn mãi', type: 'promotion' })}>
          <View style={styles.NotifyScreen_list_item}>
            <View style={styles.NotifyScreen_list_item_left}>
              <Icon name="card-giftcard" size={30} color={'orange'} />
            </View>
            <View style={styles.NotifyScreen_list_item_content}>
              <Text style={styles.NotifyScreen_list_item_content_title}>Khuyến mãi</Text>
              <Text style={styles.NotifyScreen_list_item_content_sub} numberOfLines={1} ellipsizeMode="tail">
                Săn voucher hot - 50.000d hàng chính hãng
              </Text>
            </View>
            <View style={styles.NotifyScreen_list_item_right}>
              <Icon name="chevron-right" size={30} color={'gray'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailNotify', { title: 'Video', type: 'short_video' })}>
          <View style={styles.NotifyScreen_list_item}>
            <View style={styles.NotifyScreen_list_item_left}>
              <Icon name="video-collection" size={30} color={'green'} />
            </View>
            <View style={styles.NotifyScreen_list_item_content}>
              <Text style={styles.NotifyScreen_list_item_content_title}>Video</Text>
              <Text style={styles.NotifyScreen_list_item_content_sub} numberOfLines={1} ellipsizeMode="tail">
                Thông báo video - lượt like - comment
              </Text>
            </View>
            <View style={styles.NotifyScreen_list_item_right}>
              <Icon name="chevron-right" size={30} color={'gray'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailNotify', { title: 'Bài viết', type: 'blog' })}>
          <View style={styles.NotifyScreen_list_item}>
            <View style={styles.NotifyScreen_list_item_left}>
              <Icon2 name="text-document-inverted" size={30} color={'red'} />
            </View>
            <View style={styles.NotifyScreen_list_item_content}>
              <Text style={styles.NotifyScreen_list_item_content_title}>Bài viết</Text>
              <Text style={styles.NotifyScreen_list_item_content_sub} numberOfLines={1} ellipsizeMode="tail">
                Thông báo bài viết - lượt like - comment
              </Text>
            </View>
            <View style={styles.NotifyScreen_list_item_right}>
              <Icon name="chevron-right" size={30} color={'gray'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetailNotify', { title: 'Đơn hàng', type: 'order' })}>
          <View style={styles.NotifyScreen_list_item}>
            <View style={styles.NotifyScreen_list_item_left}>
              <Icon2 name="shopping-cart" size={30} color={'violet'} />
            </View>
            <View style={styles.NotifyScreen_list_item_content}>
              <Text style={styles.NotifyScreen_list_item_content_title}>Đơn hàng</Text>
              <Text style={styles.NotifyScreen_list_item_content_sub} numberOfLines={1} ellipsizeMode="tail">
                Thông báo đơn hàng - trạng thái - tiến trình
              </Text>
            </View>
            <View style={styles.NotifyScreen_list_item_right}>
              <Icon name="chevron-right" size={30} color={'gray'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotifyScreen;
