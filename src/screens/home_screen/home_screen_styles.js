/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';

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
});

export default styles;
