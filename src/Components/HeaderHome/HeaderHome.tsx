/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from '@rneui/themed';

import styles from './HeaderHome.styles';

// type inputSearchType = {
//     text: string;
// };

const HeaderHome = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.wrap_search}>
                    <View style={styles.wrap_icon}>
                        <Icon name="search" size={24} color="#999" />
                    </View>
                    <View style={styles.wrap_input}>
                        <Text>Tim kiem san pham...</Text>
                    </View>
                </View>
                <View style={styles.wrap_cart}>
                    <Icon name="cart-plus" size={30} color="#fff" />
                    <Badge
                        value={10}
                        status="error"
                        // eslint-disable-next-line react-native/no-inline-styles
                        containerStyle={{
                            position: 'absolute',
                            top: -6,
                            left: 18,
                        }}
                    />
                </View>
                <View style={styles.wrap_notify}>
                    <Icon name="bell" size={26} color="#fff" />
                    <Badge
                        value={10}
                        status="error"
                        // eslint-disable-next-line react-native/no-inline-styles
                        containerStyle={{
                            position: 'absolute',
                            top: -6,
                            left: 12,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HeaderHome;
