/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  DetailSearch_container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  DetailSearch_header: {
    backgroundColor: '#06BCEE',
    paddingVertical: 6,
  },
  DetailSearch_listProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  DetailSearch_listProduct_item: {
    minHeight: 100,
    width: '49%',
    marginBottom: 10,
  },
});

export default styles;
