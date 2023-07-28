/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

import styles from './category_styles';

// const listCategory = [
//     {
//         url: 'https://source.unsplash.com/random?sig=1',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=2',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=3',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=4',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=5',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=6',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=7',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=8',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=9',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=10',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=11',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=12',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=13',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=14',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=15',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=16',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=17',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=18',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=19',
//         title: 'title 1',
//     },
//     {
//         url: 'https://source.unsplash.com/random?sig=20',
//         title: 'title 1',
//     },
// ];

interface CategoryItem {
    id: string;
    nameTypeProduct: string;
    nameTypeProductEn: string;
    imageTypeProduct: string;
    stt: number;
    createdAt: string;
    updatedAt: string;
}

interface CategoryProps {
    data: CategoryItem[];
}

const Category = ({ data }: CategoryProps) => {
    const renderGroups = (array: CategoryItem[], groupSize: number) => {
        let arrTemp = [...array];
        const groups = [];
        while (arrTemp.length > 0) {
            groups.push(arrTemp.splice(0, groupSize));
        }

        return groups.map((group, index) => (
            <View key={index} style={styles.category_wrap_item}>
                {group.map((item: CategoryItem, index2) => (
                    <View key={index2} style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: item.imageTypeProduct,
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text style={styles.category_item_wrap_text_text}>
                                {item.nameTypeProduct}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        ));
    };

    return (
        <View style={styles.category_container}>
            <Swiper
                showsButtons={true}
                style={styles.slider}
                horizontal={true}
                autoplay={false}
                dotColor="#fff"
                showsPagination={false}
                // autoplayTimeout={4}
                removeClippedSubviews={false}
                // eslint-disable-next-line react-native/no-inline-styles
                paginationStyle={{
                    bottom: 0,
                }}
                loop={false}
            >
                {renderGroups(data, 8)}
                {/* <View style={styles.category_wrap_item}>
                    <View style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: 'https://source.unsplash.com/random?sig=17',
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text>text</Text>
                        </View>
                    </View>
                    <View style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: 'https://source.unsplash.com/random?sig=17',
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text>text</Text>
                        </View>
                    </View>
                    <View style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: 'https://source.unsplash.com/random?sig=17',
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text>text</Text>
                        </View>
                    </View>
                    <View style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: 'https://source.unsplash.com/random?sig=17',
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text>text</Text>
                        </View>
                    </View>
                    <View style={styles.category_item}>
                        <View style={styles.category_item_wrap_image}>
                            <Image
                                style={styles.category_item_image}
                                source={{
                                    uri: 'https://source.unsplash.com/random?sig=17',
                                }}
                            />
                        </View>
                        <View style={styles.category_item_wrap_text}>
                            <Text>text</Text>
                        </View>
                    </View>
                </View> */}
            </Swiper>
        </View>
    );
};

export default React.memo(Category);
