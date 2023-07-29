/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  category_container: {
    minHeight: 200,
    width: windowWidth,
  },
  slider: {
    // height: 200,
  },
  category_wrap_item: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: windowWidth,
    // justifyContent: 'space-between',
    paddingHorizontal: 8,
    // borderWidth: 1,
  },
  category_item: {
    // height: 100,
    flexShrink: 0,
    // borderWidth: 1,
    width: windowWidth / 4 - 4,
    shadowColor: 'blue',
    elevation: 2,
    backgroundColor: '#fff',
    // marginHorizontal: 2,
  },
  category_item_wrap_image: {
    // width: windowWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category_item_image: {
    aspectRatio: 1 / 1,
    width: '70%',
    borderRadius: 20,
    borderWidth: 1,
  },
  category_item_wrap_text: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 4 - 6,
  },
  category_item_wrap_text_text: {
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'capitalize',
    width: '100%',
    height: 30,
  },
});

export default styles;
