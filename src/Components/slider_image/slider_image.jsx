/* eslint-disable prettier/prettier */
import { View, Image, StatusBar } from 'react-native';
import React from 'react';
import styles from './slider_image_styles';
import Swiper from 'react-native-swiper';

// const windowWidth = Dimensions.get('window').width;

function SliderImage({ listImages, height = 200, showsPagination = true }) {
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <StatusBar translucent backgroundColor="transparent" />
                <Swiper
                    showsButtons={false}
                    style={[styles.swiper, { height }]}
                    horizontal={true}
                    autoplay={true}
                    dotColor="#fff"
                    autoplayTimeout={4}
                    removeClippedSubviews={false}
                    showsPagination={showsPagination}
                    // automaticallyAdjustContentInsets={true}
                >
                    {listImages?.map((img, index) => (
                        <Image
                            key={index}
                            style={styles.Image}
                            source={{
                                uri: img,
                            }}
                        />
                    ))}
                </Swiper>
                <View style={styles.overlay} />
            </View>
        </View>
    );
}

export default React.memo(SliderImage);
