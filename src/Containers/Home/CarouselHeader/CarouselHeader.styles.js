/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 200,
    },
    content: {
        // flex: 1,
        // height: 200,
        position: 'relative',
    },
    wrap_header: {
        position: 'absolute',
        zIndex: 1,
        top: Platform.OS === 'ios' ? 0 : 26,
        marginTop: 10,
    },
});

export default styles;
