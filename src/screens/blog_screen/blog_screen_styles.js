/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  Blog_container: {
    flex: 1,
    borderWidth: 1,
  },
  BlogScreen_wrapBlog: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  BlogScreen_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  BlogScreen_header_avt: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  BlogScreen_header_name: {
    color: '#000',
    textTransform: 'capitalize',
  },
  BlogScreen_wrapText: {
    marginTop: 10,
  },
  BlogScreen_wrapText_text: {
    color: '#000',
  },
  BlogScreen_content: {
    marginTop: 10,
    // backgroundColor: '#333',
  },
  BlogScreen_content_wrapImage: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  BlogScreen_content_wrapImage_img: {
    flex: 1,
    height: width * 0.5,
    aspectRatio: 1 / 1,
    minWidth: '40%',
    backgroundColor: '#ccc',
  },
});

export default styles;
