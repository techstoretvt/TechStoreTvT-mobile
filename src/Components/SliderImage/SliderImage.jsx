/* eslint-disable prettier/prettier */
import { View, Image, StatusBar } from 'react-native';
import React from 'react';
import styles from './SliderImage.styles';
import Swiper from 'react-native-swiper';

// const windowWidth = Dimensions.get('window').width;

function SliderImage({ listImages }) {
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <StatusBar translucent backgroundColor="transparent" />
                <Swiper
                    showsButtons={false}
                    style={styles.swiper}
                    horizontal={true}
                    autoplay={true}
                    dotColor="#fff"
                    autoplayTimeout={4}
                    removeClippedSubviews={false}
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
            </View>
        </View>
    );
}

export default SliderImage;
