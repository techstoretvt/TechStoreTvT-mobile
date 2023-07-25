/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';

import styles from './card_product_styles';

const CardProduct = () => {
    return (
        <View style={styles.CardProduct_container}>
            <ImageBackground
                style={styles.CardProduct_container_wrapImage}
                source={{ uri: 'https://source.unsplash.com/random?sig=11' }}
            >
                <View style={styles.CardProduct_container_wrapImage_logo}>
                    <Image
                        style={
                            styles.CardProduct_container_wrapImage_logo_image
                        }
                        source={{
                            uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Flogo%2Flogo-full.webp&w=128&q=75',
                        }}
                    />
                </View>
                <View style={styles.CardProduct_container_wrapImage_like}>
                    <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            color: '#fff',
                            fontWeight: '800',
                        }}
                    >
                        Yêu thích
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.CardProduct_container_trademark}>
                <Text style={styles.CardProduct_container_trademark_text}>
                    Asus
                </Text>
            </View>
            <View style={styles.CardProduct_container_nameProduct}>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.CardProduct_container_nameProduct_text}
                >
                    Ten san pham
                </Text>
            </View>
            <View style={styles.CardProduct_container_priceCurrent}>
                <Text style={styles.CardProduct_container_priceCurrent_text}>
                    6,460,000d
                </Text>
            </View>
            <View style={styles.CardProduct_container_pricePromotion}>
                <Text style={styles.CardProduct_container_pricePromotion_text}>
                    6,460,000
                </Text>
            </View>
            <View style={styles.CardProduct_container_sale}>
                <Text style={styles.CardProduct_container_sale_text}>
                    Đã bán
                </Text>
                <Text style={styles.CardProduct_container_sale_text}>890k</Text>
            </View>
        </View>
    );
};

export default CardProduct;
