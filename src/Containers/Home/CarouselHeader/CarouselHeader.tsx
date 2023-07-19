/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';

import SliderImage from '../../../Components/SliderImage/SliderImage';
import HeaderHome from '../../../Components/HeaderHome/HeaderHome';
import styles from './CarouselHeader.styles';

const listImages = [
    'https://source.unsplash.com/random?sig=1',
    'https://source.unsplash.com/random?sig=2',
    'https://source.unsplash.com/random?sig=3',
    'https://source.unsplash.com/random?sig=4',
    'https://source.unsplash.com/random?sig=5',
    'https://source.unsplash.com/random?sig=6',
];

const BannerHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.wrap_header}>
                    <HeaderHome />
                </View>
                <SliderImage listImages={listImages} />
            </View>
        </View>
    );
};

export default BannerHome;
