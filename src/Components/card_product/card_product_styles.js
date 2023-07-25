/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
// const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    CardProduct_container: {
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingBottom: 10,
    },
    CardProduct_container_wrapImage: {
        aspectRatio: 1 / 1,
        position: 'relative',
    },
    CardProduct_container_wrapImage_logo: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    CardProduct_container_wrapImage_logo_image: {
        width: 30,
        height: 30,
    },
    CardProduct_container_wrapImage_like: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'red',
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    CardProduct_container_trademark: {
        paddingHorizontal: 6,
    },
    CardProduct_container_trademark_text: {
        textTransform: 'capitalize',
        color: '#737373',
        fontSize: 12,
    },
    CardProduct_container_nameProduct: {
        paddingHorizontal: 6,
    },
    CardProduct_container_nameProduct_text: {
        fontWeight: '800',
        color: '#000',
        fontSize: 16,
        lineHeight: 16,
        height: 32,
    },
    CardProduct_container_priceCurrent: {
        paddingHorizontal: 6,
    },
    CardProduct_container_priceCurrent_text: {
        color: 'red',
        fontWeight: '800',
        fontSize: 20,
    },
    CardProduct_container_pricePromotion: {
        paddingHorizontal: 6,
    },
    CardProduct_container_pricePromotion_text: {
        color: '#737373',
        fontSize: 16,
        textDecorationLine: 'line-through',
    },
    CardProduct_container_sale: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    CardProduct_container_sale_text: {
        marginRight: 6,
        color: '#000',
    },
});

export default styles;
