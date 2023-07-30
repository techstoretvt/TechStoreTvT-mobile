/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  DetailProduct_container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  header: {
    position: 'absolute',
    // backgroundColor: 'green',
    zIndex: 1,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  header_goBack: {
    backgroundColor: '#6E698090',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  header_wrapIcon: {
    flexDirection: 'row',
  },
  header_wrapIcon_icon: {
    backgroundColor: '#6E698090',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginRight: 14,
  },
  wrapImages: {
    aspectRatio: 1 / 0.9,
    borderWidth: 2,
    borderColor: 'red',
  },
  wrapImages_image: {
    height: '100%',
  },
});

export default styles;
