/* eslint-disable prettier/prettier */
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;

import styles from './choose_district_styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectIndexCountry, selectSearchDistrict } from '../../store/selectors';
import provinces from '../../utils/provinces.json';
import { setIndexDistrict, setSearchDistrict } from '../../store/appReducer';

// const Countries = provinces.map((item, index) => {
//   return {
//     name: item.name,
//     value: index,
//   };
// });

export const ChooseDistrict_Header = () => {
  const dispatch = useDispatch();
  const searchDistrict = useSelector(selectSearchDistrict);
  const handleChangeText = (value: string) => {
    dispatch(setSearchDistrict(value));
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={handleChangeText}
      value={searchDistrict}
      style={{ width: windowWidth - 80, borderRadius: 4, margin: 0, height: 50 }}
    />
  );
};

const ChooseDistrict = ({ navigation }: { navigation: any }) => {
  const indexCountry = useSelector(selectIndexCountry);
  const searchDistrict = useSelector(selectSearchDistrict);
  const [listDistrict, setListDistrict] = React.useState<any>([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (indexCountry !== -1) {
      let arr = provinces[indexCountry].districts.map((item, index) => {
        return {
          name: item.name,
          value: index,
        };
      });
      setListDistrict(arr);
    }
  }, [indexCountry]);

  const handleSetIndexDistrict = (id: number) => {
    dispatch(setIndexDistrict(id));
    dispatch(setSearchDistrict(''));
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.ChooseDistrict_container}>
      <Text style={styles.ChooseDistrict_title}>Quận/ huyện</Text>
      <Text>{searchDistrict}</Text>
      <View style={styles.ChooseDistrict_list}>
        {listDistrict?.map((item: any) => {
          if (item.name.toLowerCase().indexOf(searchDistrict.toLowerCase()) !== -1) {
            return (
              <TouchableOpacity key={item.value} onPress={() => handleSetIndexDistrict(item.value)}>
                <Text style={styles.ChooseDistrict_list_text}>{item.name}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default ChooseDistrict;
