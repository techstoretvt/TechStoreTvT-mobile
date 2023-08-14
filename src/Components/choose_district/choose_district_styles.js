/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ChooseDistrict_container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  ChooseDistrict_title: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ChooseDistrict_list: {
    paddingVertical: 10,
  },
  ChooseDistrict_list_text: {
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default styles;
