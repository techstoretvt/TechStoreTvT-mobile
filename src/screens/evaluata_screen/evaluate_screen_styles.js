/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Evaluate_container: {
    flex: 1,
  },
  EvaluateScreen_product: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: '#fff',
    marginTop: 6,
  },
  EvaluateScreen_product_img: {
    width: 50,
    height: 50,
  },
  EvaluateScreen_product_wrap: {
    flex: 1,
  },
  EvaluateScreen_product_wrap_name: {
    color: '#000',
    fontSize: 17,
    textTransform: 'capitalize',
  },
  EvaluateScreen_product_wrap_classify: {
    marginTop: 6,
  },
  EvaluateScreen_wrapStar: {
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 20,
  },
  EvaluateScreen_wrapStar_title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  EvaluateScreen_note: {},
  EvaluateScreen_media: {
    marginTop: 10,
  },
  EvaluateScreen_media_listImg: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    gap: 4,
  },
  EvaluateScreen_media_listImg_wrap: {
    maxWidth: '20%',
    flex: 1,
    height: 80,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    position: 'relative',
  },
  EvaluateScreen_media_listImg_img: {
    maxWidth: '100%',
    aspectRatio: 1 / 1,
  },
  EvaluateScreen_media_listImg_wrap_btnDelete: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 20,
  },
  EvaluateScreen_media_video: {
    padding: 6,
  },
  EvaluateScreen_media_video_vd: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
  EvaluateScreen_settings: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  EvaluateScreen_settings_left: {
    flex: 1,
  },
  EvaluateScreen_settings_left_title: {
    color: '#000',
    fontSize: 16,
  },
  EvaluateScreen_settings_left_des: {},
  EvaluateScreen_settings_right: {},
  EvaluateScreen_media_btns: {
    flexDirection: 'row',
    marginTop: 6,
    gap: 6,
    paddingHorizontal: 6,
  },
});

export default styles;
