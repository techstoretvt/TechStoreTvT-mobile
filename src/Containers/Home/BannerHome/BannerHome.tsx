/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './BannerHome.styles';

const BannerHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Image_wrap}>
                <Image
                    style={styles.Image}
                    source={{
                        uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Fhome%2Fbanner%2Fiphone.webp&w=640&q=75',
                    }}
                />
            </View>
            <View style={styles.wrap_text}>
                <View>
                    <Text>iPhone 14 Pro</Text>
                </View>
                <Text>Pro.Beyond. Pro.Beyond</Text>
                <View>
                    <Text>Giá gốc từ 21.990.000đ</Text>
                </View>
                <Text>Đăng ký mua ngay kẻo lở</Text>
                <Text>Mở bán từ 7/5</Text>
            </View>
        </View>
    );
};

export default BannerHome;
