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
        // flex: 1,
        // height: 200,
        flexDirection: 'row',
        shadowColor: 'red',
        elevation: 50,
    },
    banner_home_Image_wrap: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        flex: 1,
        height: 100,
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
});

export default styles;
