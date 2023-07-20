/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    wrap_search: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: windowWidth - 110,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    wrap_icon: {},
    wrap_input: {
        paddingHorizontal: 10,
    },
    wrap_cart: {
        marginLeft: 10,
        width: 40,
    },
    wrap_notify: {
        marginLeft: 10,
        width: 40,
    },
});

export default styles;
