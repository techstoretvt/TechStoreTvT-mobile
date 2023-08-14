/* eslint-disable prettier/prettier */
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchCountry } from '../../store/selectors';

import styles from './choose_country_styles';
import provinces from '../../utils/provinces.json';
import { setSearchCountry, setIndexCountry, setIndexDistrict } from '../../store/appReducer';

const windowWidth = Dimensions.get('window').width;
const Countries = provinces.map((item, index) => {
  return {
    name: item.name,
    value: index,
  };
});

export const ChooseCountry_Header = () => {
  const dispatch = useDispatch();
  const searchCountry = useSelector(selectSearchCountry);

  const ChangeText = (value: string) => {
    dispatch(setSearchCountry(value));
  };
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={text => ChangeText(text)}
      value={searchCountry}
      style={{ width: windowWidth - 80, borderRadius: 4, margin: 0, height: 50 }}
    />
  );
};

const ChooseCountry = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const searchCountry = useSelector(selectSearchCountry);

  const handeleSetIndexCountry = (id: number) => {
    dispatch(setIndexCountry(id));
    dispatch(setSearchCountry(''));
    dispatch(setIndexDistrict(-1));
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.ChooseCountry_container}>
      <Text style={styles.ChooseCountry_title}>Tỉnh/ thành phố</Text>
      <View style={styles.ChooseCountry_list}>
        {Countries?.map(item => {
          if (item.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1) {
            return (
              <TouchableOpacity key={item.value} onPress={() => handeleSetIndexCountry(item.value)}>
                <Text style={styles.ChooseCountry_list_text}>{item.name}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default ChooseCountry;
