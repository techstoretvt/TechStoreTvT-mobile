/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';

import CarouselHeader from '../../Containers/Home/CarouselHeader/CarouselHeader';
import Background from '../../Components/Background/Background';
import styles from './Home.styles';
import BannerHome from '../../Containers/Home/BannerHome/BannerHome';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CarouselHeader />
            <BannerHome />

            <Background />
        </View>
    );
};

export default HomeScreen;
