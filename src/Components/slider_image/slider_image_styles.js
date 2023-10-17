/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  slider: {
    // paddingTop: 80,
    // backgroundColor: '#006D98',
  },
  swiper: {
    paddingTop: 0,
    border: '1px solid #000',
    // backgroundColor: '#006D98',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#72639F', // Màu của lớp phủ
    opacity: 0.1,
    pointerEvents: 'none',
  },
  Image: {
    width: windowWidth,
    height: '100%',
    resizeMode: 'cover',
    flexShrink: 0,
    opacity: 1,
  },
});

export default styles;
