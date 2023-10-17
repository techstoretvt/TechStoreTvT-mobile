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
  showIcon?: boolean;
  navigation?: any;
}

const HeaderPurchase = ({ title, goBack, showIcon = true, navigation }: HeaderPurchaseProps) => {
  const navigation2 = useNavigation();

  const handleGoBack = () => {
    if (!goBack) {
      if (!navigation) {
        navigation2.goBack();
        return;
      }
      navigation.goBack();
    } else {
      goBack();
    }
  };

  return (
    <>
      <View style={[styles.HeaderPurchase_container]}>
        <View style={styles.HeaderPurchase_goBack}>
          {showIcon && (
            <TouchableOpacity onPress={() => handleGoBack()}>
              <Icon name="long-arrow-left" size={30} color={'red'} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.HeaderPurchase_title}>{title}</Text>
        <View style={styles.HeaderPurchase_right}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
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
