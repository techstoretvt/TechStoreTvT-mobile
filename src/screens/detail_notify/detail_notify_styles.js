/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  DetailNotify_container: {
    flex: 1,
  },
  DetailNotify_listNotify: {
    flex: 1,
    marginTop: 6,
  },
  DetailNotify_listNotify_item: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  DetailNotify_listNotify_item_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  DetailNotify_listNotify_item_wrap: {
    flex: 1,
  },
  DetailNotify_listNotify_item_wrap_title: {
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  DetailNotify_listNotify_item_wrap_content: {},
});

export default styles;
