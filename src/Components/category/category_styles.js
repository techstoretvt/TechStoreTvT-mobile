/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    category_container: {
        height: 200,
        width: windowWidth,
    },
    slider: {
        height: 200,
    },
    category_wrap_item: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: windowWidth,
    },
    category_item: {
        height: 100,
        flexShrink: 0,
    },
    category_item_wrap_image: {
        width: windowWidth / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    category_item_image: {
        aspectRatio: 1 / 1,
        width: '70%',
        borderRadius: 20,
        borderWidth: 1,
    },
    category_item_wrap_text: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
