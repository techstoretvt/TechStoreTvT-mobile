/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    slider: {
        height: 200,
    },
    swiper: {
        paddingTop: 0,
    },
    Image: {
        width: windowWidth,
        height: 200,
        objectFit: 'cover',
        flexShrink: 0,
    },
});

export default styles;
