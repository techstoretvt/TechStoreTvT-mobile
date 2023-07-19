/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 200,
        flexDirection: 'row',
        shadowColor: 'red',
        elevation: 50,
    },
    Image_wrap: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        flex: 1,
        height: 100,
    },
    Image: {
        flex: 1,
        aspectRatio: 1 / 1,

        // iOS không hỗ trợ shadowOffset trong stylesheet, bạn cần sử dụng trick sau:
        // shadowOffset: { width: 0, height: 2 },
    },
    wrap_text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
