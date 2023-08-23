/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  SearchScreen_container: {
    flex: 1,
  },
  SearchScreen_header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  SearchScreen_header_left: {},
  SearchScreen_header_right: {
    flex: 1,
  },
  SearchScreen_listKeyword: {
    padding: 10,
  },
  SearchScreen_listKeyword_text: {
    borderTopWidth: 1,
    paddingVertical: 10,
    borderTopColor: '#ccc',
    color: '#333',
  },
  SearchScreen_suggestions: {
    marginTop: 10,
  },
  SearchScreen_suggestions_heaader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  SearchScreen_suggestions_heaader_separate: {
    width: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  SearchScreen_suggestions_heaader_title: {},
  SearchScreen_suggestions_list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  SearchScreen_suggestions_list_item: {
    minHeight: 100,
    width: '49%',
  },
});

export default styles;
