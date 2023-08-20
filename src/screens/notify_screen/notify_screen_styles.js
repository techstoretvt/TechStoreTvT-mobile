/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  Notify_container: {},
  NotifyScreen_list: {
    marginTop: 10,
  },
  NotifyScreen_list_item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  NotifyScreen_list_item_left: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotifyScreen_list_item_content: {
    flex: 1,
  },
  NotifyScreen_list_item_content_title: {
    fontSize: 18,
    color: '#000',
  },
  NotifyScreen_list_item_content_sub: {},
  NotifyScreen_list_item_right: {},
});

export default styles;
