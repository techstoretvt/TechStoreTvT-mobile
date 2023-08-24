/* eslint-disable prettier/prettier */
import { View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './slider_image_styles';
import Swiper from 'react-native-swiper';

// const windowWidth = Dimensions.get('window').width;

function SliderImage({ listImages, height = 200, showsPagination = true,navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Swiper
          showsButtons={false}
          style={[styles.swiper, { height }]}
          horizontal={true}
          autoplay={true}
          dotColor="#fff"
          autoplayTimeout={4}
          // removeClippedSubviews={false}
          showsPagination={showsPagination}
          // automaticallyAdjustContentInsets={true}
        >
          {listImages?.map((img, index) => {
            return (
              <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('DetailSearchPromotion')}
              >

                <Image
                  style={styles.Image}
                  source={{
                    uri: img.cover,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </Swiper>
        <View style={styles.overlay} />
      </View>
    </View>
  );
}

export default React.memo(SliderImage);
