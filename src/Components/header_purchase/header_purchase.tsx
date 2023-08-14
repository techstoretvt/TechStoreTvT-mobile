/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Badge } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

import styles from './header_purchase_styles';

interface HeaderPurchaseProps {
  title: string;
  goBack: any;
}

const HeaderPurchase = (props: HeaderPurchaseProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (!props.goBack) {
      navigation.goBack();
    } else {
      props.goBack();
    }
  };

  return (
    <>
      <View style={[styles.HeaderPurchase_container]}>
        <View style={styles.HeaderPurchase_goBack}>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <Icon name="long-arrow-left" size={30} color={'red'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.HeaderPurchase_title}>{props.title}</Text>
        <View style={styles.HeaderPurchase_right}>
          <TouchableOpacity>
            <Icon name="search" size={24} color={'red'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.HeaderPurchase_right_notify}>
              <Icon2 name="message1" size={24} color={'red'} />
              <Badge status="error" value={10} containerStyle={{ position: 'absolute', top: -8, right: -10 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeaderPurchase;
