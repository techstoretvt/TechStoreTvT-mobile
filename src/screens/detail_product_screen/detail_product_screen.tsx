/* eslint-disable prettier/prettier */
import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import ImageView from 'react-native-image-viewing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from '@rneui/themed';

import styles from './detail_product_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';

const images = [
  {
    uri: 'https://source.unsplash.com/random?sig=1',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=2',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=3',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=4',
  },
  {
    uri: 'https://source.unsplash.com/random?sig=5',
  },
];

const DetailProductScreen = () => {
  const insets = useSafeAreaInsets();

  const [openLightBox, setOpenLightBox] = React.useState(false);
  return (
    <ScrollView>
      <View style={styles.DetailProduct_container}>
        <FocusAwareStatusBar translucent backgroundColor="transparent" />
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <View style={styles.header_goBack}>
            <Icon name="arrow-left" size={20} color="#fff" />
          </View>
          <View style={styles.header_wrapIcon}>
            <View style={styles.header_wrapIcon_icon}>
              <Icon name="share" size={20} color="#fff" />
            </View>
            <View style={styles.header_wrapIcon_icon}>
              <Icon name="cart-plus" size={26} color="#fff" />
              <Badge
                value={10}
                status="error"
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                  position: 'absolute',
                  top: -6,
                  right: -8,
                }}
              />
            </View>
          </View>
        </View>
        <View style={[styles.wrapImages]}>
          <Swiper
            showsButtons={false}
            horizontal={true}
            dotColor="#fff"
            showsPagination={true}
            // eslint-disable-next-line react-native/no-inline-styles
            paginationStyle={{
              bottom: 4,
            }}
            loop={false}
          >
            <Image source={{ uri: 'https://source.unsplash.com/random?sig=1' }} style={styles.wrapImages_image} />
            <Image source={{ uri: 'https://source.unsplash.com/random?sig=2' }} style={styles.wrapImages_image} />
            <Image source={{ uri: 'https://source.unsplash.com/random?sig=3' }} style={styles.wrapImages_image} />
          </Swiper>
        </View>
        <Text>DetailProductScreen</Text>
        <ImageView
          images={images}
          imageIndex={2}
          visible={openLightBox}
          onRequestClose={() => setOpenLightBox(false)}
          presentationStyle="overFullScreen"
          // backgroundColor="yellow"
          // eslint-disable-next-line react/no-unstable-nested-components, react-native/no-inline-styles
          FooterComponent={() => <Text style={{ color: '#fff' }}>1/6</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default DetailProductScreen;
