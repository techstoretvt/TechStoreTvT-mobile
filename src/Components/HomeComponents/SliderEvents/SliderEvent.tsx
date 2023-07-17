/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import styles from './SliderEvent.styles';
// import { SliderBox } from 'react-native-image-slider-box';
// import FastImage from 'react-native-fast-image';

// const listImage = [
//     'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
//     'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-xinh-viet-nam.jpg',
//     'https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg',
// ];

function SliderEvent() {
    return (
        <View style={styles.SliderEvent_container}>
            {/* <SliderBox
                // ImageComponent={FastImage}
                images={listImage}
                onCurrentImagePressed={(index: number) =>
                    console.log(`image ${index} pressed`)
                }
                currentImageEmitter={(index: number) =>
                    console.log(`current pos is: ${index}`)
                }
            /> */}
            <Text>sdfhkjsdhfj</Text>
        </View>
    );
}

export default SliderEvent;
