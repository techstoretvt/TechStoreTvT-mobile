/* eslint-disable prettier/prettier */
import { StyleSheet, Platform, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    home_container: {
        flex: 1,
        // borderWidth: 2,
    },
    /* carousel */
    carousel_header_container: {
        // flex: 1,
        // height: 200,
    },
    carousel_header_content: {
        // flex: 1,
        // height: 200,
        position: 'relative',
    },
    carousel_header_wrap_header: {
        position: 'absolute',
        zIndex: 1,
        top: Platform.OS === 'ios' ? 0 : 26,
        marginTop: 10,
    },

    /* banner home */
    banner_home_container: {
        flexDirection: 'row',
        shadowColor: 'blue',
        elevation: 20,
        borderRadius: 5,
        borderTopStartRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        top: -16,
        backgroundColor: '#fcfcfc',
        marginHorizontal: 5,
    },
    banner_home_Image_wrap: {
        alignItems: 'center',
        flex: 1,
        height: 150,
    },
    banner_home_Image: {
        flex: 1,
        aspectRatio: 1 / 1,
    },
    banner_home_wrap_text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner_home_text: {
        color: '#fff',
        fontWeight: '700',
        textShadowColor: '#000', // Màu sắc của bóng đổ (cùng màu với nền trắng)
        textShadowOffset: { width: 2, height: 2 }, // Điều chỉnh độ dài và chiều cao của bóng đổ
        textShadowRadius: 10, // Độ mờ của bóng đổ
        fontSize: 16,
    },
    banner_home_text_title: {
        fontSize: 20,
        color: '#fff',
        textShadowColor: 'blue',
        textShadowRadius: 1,
    },

    /*Category */
    Category_container: {
        marginTop: 0,
        height: 200,
    },

    /* firstAdvertisement */
    firstAdvertisement_container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    firstAdvertisement_container_wrap: {
        width: windowWidth / 3 - 35,
        height: 100,
        borderWidth: 1,
        position: 'relative',
        borderRadius: 10,

        mid: {
            width: windowWidth / 3 + 20,
            borderRadius: 0,
        },
    },
    firstAdvertisement_container_wrap_label: {
        position: 'absolute',
        top: -14,
        left: 8,
        right: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0053D2',
        fontWeight: 'bold',
        paddingVertical: 2,
    },
    firstAdvertisement_container_wrap_label_firstText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    firstAdvertisement_container_wrap_label_secondText: {
        color: '#fff',
        marginLeft: 4,
    },
    firstAdvertisement_container_wrap_label_leftCorner: {
        position: 'absolute',
        top: 4,
        left: -16,
        borderWidth: 10,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#0053D2',
        transform: [{ rotate: '-20deg' }],
    },
    firstAdvertisement_container_wrap_label_rightCorner: {
        position: 'absolute',
        top: 4,
        right: -16,
        borderWidth: 10,
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#0053D2',
        transform: [{ rotate: '20deg' }],
    },
    firstAdvertisement_container_wrap_btn: {
        position: 'absolute',
        bottom: -10,
        left: 5,
        right: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 4,
        shadowColor: 'blue',
        elevation: 6,
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    firstAdvertisement_container_wrap_btn_text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 12,
    },
    firstAdvertisement_container_wrap_btn_wrap_icon: {
        backgroundColor: 'red',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
    },

    /* secondAdvertisement */
    secondAdvertisement_container: {
        marginTop: 40,
        backgroundColor: 'red',
        padding: 10,
        marginHorizontal: 6,
        borderRadius: 10,
    },
    secondAdvertisement_content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 16,
        position: 'relative',
    },
    secondAdvertisement_content_image: {
        width: '48%',
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
    },
    secondAdvertisement_content_wrap_label: {
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: -26,
    },
    secondAdvertisement_content_label: {
        paddingHorizontal: 20,
        paddingVertical: 4,
        backgroundColor: '#DA1C0C',
        borderTopStartRadius: 10,
        borderTopRightRadius: 10,
    },

    /* promotion Product */
    promotionProduct_container: {
        marginTop: 20,
    },
    promotionProduct_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    promotionProduct_header_left: {},
    promotionProduct_header_right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promotionProduct_header_right_text: {
        color: '#333',
        marginRight: 4,
    },
    promotionProduct_listProduct: {
        flexDirection: 'row',
        marginTop: 6,
    },
    promotionProduct_listProduct_product: {
        width: 150,
        padding: 10,
    },
    promotionProduct_listProduct_product_wrapImage: {
        aspectRatio: 1 / 1,
        position: 'relative',
    },
    promotionProduct_listProduct_product_wrapImage_lablePersent: {
        position: 'absolute',
        backgroundColor: 'orange',
        right: 0,
        alignItems: 'center',
        padding: 3,
    },
    promotionProduct_listProduct_product_wrapImage_label_logo: {
        position: 'absolute',
        left: 0,
        width: 30,
        height: 30,
        backgroundColor: '#020114',
    },
    promotionProduct_listProduct_product_price: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    promotionProduct_listProduct_product_sale: {
        pointerEvents: 'none',
        position: 'relative',
    },
    promotionProduct_listProduct_product_sale_wrap_text: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },

    /*finallyAdvertisement */
    finallyAdvertisement_container: {
        marginTop: 20,
    },
    finallyAdvertisement_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
    },
    finallyAdvertisement_header_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    finallyAdvertisement_header_item_wrapIcon: {
        marginRight: 5,
    },
    finallyAdvertisement_wrapSlider: {
        marginTop: 10,
        paddingHorizontal: 10,
    },

    /* suggestion */
    suggestion_container: {
        marginTop: 20,
    },
    suggestion_container_header: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
    suggestion_container_header_title: {
        color: 'red',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    suggestion_container_listProduct: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    suggestion_container_listProduct_wrapProduct: {
        minHeight: 200,
        width: '50%',
        padding: 5,
    },
});

export default styles;
