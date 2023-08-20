/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ShortVideo_container: {},
  swiper: {
    backgroundColor: '#000',
  },
  ShortVideoScreen_video: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'blue',
    // backgroundColor: '#000',
  },
  ShortVideoScreen_video_vd: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'aqua',
  },
  ShortVideoScreen_video_text: {
    fontSize: 40,
    fontWeight: '900',
    color: '#fff',
  },
});

export default styles;
