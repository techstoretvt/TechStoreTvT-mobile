/* eslint-disable prettier/prettier */
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from '@rneui/themed';

import styles from './home_screen_styles';
// import { selectAppSettings } from '../../store/selectors';
// import { setTheme } from '../../store/appReducer';
import CountDown from 'react-native-countdown-component';

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
        <ScrollView
            style={styles.home_container}
            // stickyHeaderIndices={[0]}
        >
            <View style={styles.carousel_header_container}>
                <View style={styles.carousel_header_content}>
                    <View style={styles.carousel_header_wrap_header}>
                        <HeaderHome />
                    </View>
                    <SliderImage listImages={listImages} height={200} />
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

            {/* firstAdvertisement */}
            <View style={styles.firstAdvertisement_container}>
                <ImageBackground
                    source={require('../../assets/images/HomeScreen/banner.png')}
                    style={styles.firstAdvertisement_container_wrap}
                >
                    <View style={styles.firstAdvertisement_container_wrap_btn}>
                        <Text
                            style={
                                styles.firstAdvertisement_container_wrap_btn_text
                            }
                        >
                            Mua ngay
                        </Text>
                        <View
                            style={
                                styles.firstAdvertisement_container_wrap_btn_wrap_icon
                            }
                        >
                            <Icon name="chevron-right" size={12} color="#fff" />
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/images/HomeScreen/banner.png')}
                    style={[
                        styles.firstAdvertisement_container_wrap,
                        styles.firstAdvertisement_container_wrap.mid,
                    ]}
                >
                    <View
                        style={styles.firstAdvertisement_container_wrap_label}
                    >
                        <Text
                            style={[
                                styles.firstAdvertisement_container_wrap_label_firstText,
                            ]}
                        >
                            12.12
                        </Text>
                        <Text
                            style={[
                                styles.firstAdvertisement_container_wrap_label_secondText,
                            ]}
                        >
                            Laptop gia re
                        </Text>
                        <View
                            style={
                                styles.firstAdvertisement_container_wrap_label_leftCorner
                            }
                        >
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    position: 'absolute',
                                    display: 'none',
                                }}
                            >
                                .
                            </Text>
                        </View>
                        <View
                            style={
                                styles.firstAdvertisement_container_wrap_label_rightCorner
                            }
                        >
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    position: 'absolute',
                                    display: 'none',
                                }}
                            >
                                .
                            </Text>
                        </View>
                    </View>
                    <View style={styles.firstAdvertisement_container_wrap_btn}>
                        <Text
                            style={
                                styles.firstAdvertisement_container_wrap_btn_text
                            }
                        >
                            Mua ngay
                        </Text>
                        <View
                            style={
                                styles.firstAdvertisement_container_wrap_btn_wrap_icon
                            }
                        >
                            <Icon name="chevron-right" size={12} color="#fff" />
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/images/HomeScreen/banner.png')}
                    style={styles.firstAdvertisement_container_wrap}
                >
                    <View style={styles.firstAdvertisement_container_wrap_btn}>
                        <Text
                            style={
                                styles.firstAdvertisement_container_wrap_btn_text
                            }
                        >
                            Mua ngay
                        </Text>
                        <View
                            style={
                                styles.firstAdvertisement_container_wrap_btn_wrap_icon
                            }
                        >
                            <Icon name="chevron-right" size={12} color="#fff" />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* secondAdvertisement */}
            <View style={styles.secondAdvertisement_container}>
                <View style={styles.secondAdvertisement_content}>
                    <Image
                        source={{
                            uri: 'https://tranvanthoai.online/_next/static/media/slider-image-slide-2.8cc54fa4.webp',
                        }}
                        style={styles.secondAdvertisement_content_image}
                    />
                    <Image
                        source={{
                            uri: 'https://tranvanthoai.online/_next/static/media/slider-image-slide-2.8cc54fa4.webp',
                        }}
                        style={styles.secondAdvertisement_content_image}
                    />
                    <View style={styles.secondAdvertisement_content_wrap_label}>
                        <View style={styles.secondAdvertisement_content_label}>
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ color: '#fff', fontWeight: 'bold' }}
                            >
                                Sieu khuyen mai
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* promotion product */}
            <View style={styles.promotionProduct_container}>
                <View style={styles.promotionProduct_header}>
                    <View style={styles.promotionProduct_header_left}>
                        <CountDown
                            until={60 * 60 * 24 * 7}
                            onFinish={() => Alert.alert('finished')}
                            onPress={() => Alert.alert('hello')}
                            size={14}
                            timeLabels={{
                                d: '',
                                h: '',
                                m: '',
                                s: '',
                            }}
                            showSeparator={true}
                        />
                    </View>
                    <View style={styles.promotionProduct_header_right}>
                        <Text style={styles.promotionProduct_header_right_text}>
                            Xem tat ca
                        </Text>
                        <Icon name="chevron-right" size={14} color="#333" />
                    </View>
                </View>
                <ScrollView
                    style={styles.promotionProduct_listProduct}
                    horizontal={true}
                >
                    <View style={styles.promotionProduct_listProduct_product}>
                        <ImageBackground
                            source={{
                                uri: 'https://tranvanthoai.online/_next/static/media/slider-image-slide-2.8cc54fa4.webp',
                            }}
                            style={
                                styles.promotionProduct_listProduct_product_wrapImage
                            }
                        >
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_lablePersent
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: 'red', fontWeight: 'bold' }}
                                >
                                    40%
                                </Text>
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Giam
                                </Text>
                            </View>

                            <Image
                                source={{
                                    uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Flogo%2Flogo-full.webp&w=128&q=75',
                                }}
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_label_logo
                                }
                            />
                        </ImageBackground>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_price
                            }
                        >
                            <Text style={{ color: 'red' }}>d</Text>
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >
                                359.000
                            </Text>
                        </View>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_sale
                            }
                        >
                            <Slider
                                value={1}
                                // onValueChange={setValue}
                                maximumValue={10}
                                minimumValue={0}
                                step={1}
                                allowTouchTrack
                                // eslint-disable-next-line react-native/no-inline-styles
                                trackStyle={{
                                    height: 20,
                                    backgroundColor: 'transparent',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                // eslint-disable-next-line react-native/no-inline-styles
                                thumbStyle={{
                                    height: 20,
                                    // width: '100%',
                                    backgroundColor: 'transparent',
                                }}
                            />
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_sale_wrap_text
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: '#fff', fontWeight: '800' }}
                                >
                                    Da ban 20
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.promotionProduct_listProduct_product}>
                        <ImageBackground
                            source={{
                                uri: 'https://tranvanthoai.online/_next/static/media/slider-image-slide-2.8cc54fa4.webp',
                            }}
                            style={
                                styles.promotionProduct_listProduct_product_wrapImage
                            }
                        >
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_lablePersent
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: 'red', fontWeight: 'bold' }}
                                >
                                    40%
                                </Text>
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Giam
                                </Text>
                            </View>

                            <Image
                                source={{
                                    uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Flogo%2Flogo-full.webp&w=128&q=75',
                                }}
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_label_logo
                                }
                            />
                        </ImageBackground>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_price
                            }
                        >
                            <Text style={{ color: 'red' }}>d</Text>
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >
                                359.000
                            </Text>
                        </View>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_sale
                            }
                        >
                            <Slider
                                value={1}
                                // onValueChange={setValue}
                                maximumValue={10}
                                minimumValue={0}
                                step={1}
                                allowTouchTrack
                                // eslint-disable-next-line react-native/no-inline-styles
                                trackStyle={{
                                    height: 20,
                                    backgroundColor: 'transparent',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                // eslint-disable-next-line react-native/no-inline-styles
                                thumbStyle={{
                                    height: 20,
                                    // width: '100%',
                                    backgroundColor: 'transparent',
                                }}
                            />
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_sale_wrap_text
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: '#fff', fontWeight: '800' }}
                                >
                                    Da ban 20
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.promotionProduct_listProduct_product}>
                        <ImageBackground
                            source={{
                                uri: 'https://tranvanthoai.online/_next/static/media/slider-image-slide-2.8cc54fa4.webp',
                            }}
                            style={
                                styles.promotionProduct_listProduct_product_wrapImage
                            }
                        >
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_lablePersent
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: 'red', fontWeight: 'bold' }}
                                >
                                    40%
                                </Text>
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Giam
                                </Text>
                            </View>

                            <Image
                                source={{
                                    uri: 'https://tranvanthoai.online/_next/image?url=%2Fimages%2Flogo%2Flogo-full.webp&w=128&q=75',
                                }}
                                style={
                                    styles.promotionProduct_listProduct_product_wrapImage_label_logo
                                }
                            />
                        </ImageBackground>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_price
                            }
                        >
                            <Text style={{ color: 'red' }}>d</Text>
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    color: 'red',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >
                                359.000
                            </Text>
                        </View>
                        <View
                            style={
                                styles.promotionProduct_listProduct_product_sale
                            }
                        >
                            <Slider
                                value={1}
                                // onValueChange={setValue}
                                maximumValue={10}
                                minimumValue={0}
                                step={1}
                                allowTouchTrack
                                // eslint-disable-next-line react-native/no-inline-styles
                                trackStyle={{
                                    height: 20,
                                    backgroundColor: 'transparent',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                // eslint-disable-next-line react-native/no-inline-styles
                                thumbStyle={{
                                    height: 20,
                                    // width: '100%',
                                    backgroundColor: 'transparent',
                                }}
                            />
                            <View
                                style={
                                    styles.promotionProduct_listProduct_product_sale_wrap_text
                                }
                            >
                                <Text
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{ color: '#fff', fontWeight: '800' }}
                                >
                                    Da ban 20
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            {/* finallyAdvertisement  */}
            <View style={styles.finallyAdvertisement_container}>
                <View style={styles.finallyAdvertisement_header}>
                    <View style={styles.finallyAdvertisement_header_item}>
                        <View
                            style={
                                styles.finallyAdvertisement_header_item_wrapIcon
                            }
                        >
                            <Icon name="circle" size={15} color={'red'} />
                        </View>
                        <Text>Miễn phí trả hàng</Text>
                    </View>
                    <View style={styles.finallyAdvertisement_header_item}>
                        <View
                            style={
                                styles.finallyAdvertisement_header_item_wrapIcon
                            }
                        >
                            <Icon name="circle" size={15} color={'red'} />
                        </View>
                        <Text>Chính hãng 100%</Text>
                    </View>
                    <View style={styles.finallyAdvertisement_header_item}>
                        <View
                            style={
                                styles.finallyAdvertisement_header_item_wrapIcon
                            }
                        >
                            <Icon name="circle" size={15} color={'red'} />
                        </View>
                        <Text>Giao miễn phí</Text>
                    </View>
                </View>
                <View style={styles.finallyAdvertisement_wrapSlider}>
                    <SliderImage
                        listImages={listImages}
                        height={120}
                        showsPagination={false}
                    />
                </View>
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
        </ScrollView>
    );
};

export default HomeScreen;