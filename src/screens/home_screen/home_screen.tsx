/* eslint-disable prettier/prettier */
import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import styles from './home_screen_styles';
// import { selectAppSettings } from '../../store/selectors';
// import { setTheme } from '../../store/appReducer';

import Background from '../../components/background/background';
import SliderImage from '../../components/slider_image/slider_image';
import HeaderHome from '../../components/header_home/header_home';
import Category from '../../components/category/category';

const listImages = [
    'https://source.unsplash.com/random?sig=1',
    'https://source.unsplash.com/random?sig=2',
    'https://source.unsplash.com/random?sig=3',
    'https://source.unsplash.com/random?sig=4',
    'https://source.unsplash.com/random?sig=5',
    'https://source.unsplash.com/random?sig=6',
];

const HomeScreen = () => {
    // const appSettings = useSelector(selectAppSettings);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(appSettings.theme);
    // }, []);

    // const handleThemeUpdate = () => {
    //     // Gọi action creator setTheme để cập nhật theme
    //     dispatch(setTheme(appSettings.theme === 'dark' ? 'light' : 'dark'));
    // };

    return (
        <View style={styles.home_container}>
            <View style={styles.carousel_header_container}>
                <View style={styles.carousel_header_content}>
                    <View style={styles.carousel_header_wrap_header}>
                        <HeaderHome />
                    </View>
                    <SliderImage listImages={listImages} />
                </View>
            </View>

            {/* Banner */}
            <ImageBackground
                source={require('../../assets/images/HomeScreen/banner.png')}
                style={styles.banner_home_container}
            >
                <View style={styles.banner_home_Image_wrap}>
                    <Image
                        style={styles.banner_home_Image}
                        source={{
                            uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Fhome%2Fbanner%2Fiphone.webp&w=640&q=75',
                        }}
                    />
                </View>
                <View style={styles.banner_home_wrap_text}>
                    <View>
                        <Text
                            style={[
                                styles.banner_home_text,
                                styles.banner_home_text_title,
                            ]}
                        >
                            iPhone 14 Pro
                        </Text>
                    </View>
                    <Text style={styles.banner_home_text}>
                        Pro.Beyond. Pro.Beyond
                    </Text>
                    <View>
                        <Text style={styles.banner_home_text}>
                            Giá gốc từ 21.990.000đ
                        </Text>
                    </View>
                    <Text style={styles.banner_home_text}>
                        Đăng ký mua ngay kẻo lở
                    </Text>
                    <Text style={styles.banner_home_text}>Mở bán từ 7/5</Text>
                </View>
            </ImageBackground>

            {/* Category */}
            <View style={styles.Category_container}>
                <Category />
            </View>

            {/* <View>
                <Text>Theme: {appSettings.theme}</Text>
                <Text>Language: {appSettings.language}</Text>
            </View> */}
            {/* <View>
                <Button
                    title="Update Theme to Dark"
                    onPress={handleThemeUpdate}
                />
            </View> */}

            <Background />
        </View>
    );
};

export default HomeScreen;
