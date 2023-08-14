/* eslint-disable prettier/prettier */
// src/store/appReducer.js
import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const getPersistedData = async (key) => {
//     try {
//         // Lấy dữ liệu từ AsyncStorage dựa vào khóa (key) được truyền vào
//         const data = await AsyncStorage.getItem(key);

//         // Trả về dữ liệu lấy được từ AsyncStorage
//         return data;
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         console.error(
//             `Error retrieving data from AsyncStorage (${key}):`,
//             error
//         );
//         return null;
//     }
// };

const initialState = {
  // Initial state của reducer
  theme: 'light', // Chủ đề mặc định là light (chủ đề sáng)
  language: 'en', // Ngôn ngữ mặc định là tiếng Anh
  listAddressUser: null,
  searchCountry: '',
  searchDistrict: '',
  indexCountry: -1,
  indexDistrict: -1,
  paymentMethob: {
    name: 'hand',
    title: 'Thanh toán khi nhận hàng',
  },
};

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Action để thay đổi chủ đề (theme)
    setTheme: (state, action) => {
      console.log('vao action (action.payload): ', action.payload);
      state.theme = action.payload;
    },
    // Action để thay đổi ngôn ngữ (language)
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setListAddressUser: (state, action) => {
      state.listAddressUser = action.payload;
    },
    setSearchCountry: (state, action) => {
      state.searchCountry = action.payload;
    },
    setIndexCountry: (state, action) => {
      state.indexCountry = action.payload;
    },
    setSearchDistrict: (state, action) => {
      state.searchDistrict = action.payload;
    },
    setIndexDistrict: (state, action) => {
      state.indexDistrict = action.payload;
    },
    setPaymentMethob: (state, action) => {
      state.paymentMethob = action.payload;
    },
  },
});

export const {
  setTheme,
  setLanguage,
  setListAddressUser,
  setSearchCountry,
  setIndexCountry,
  setSearchDistrict,
  setIndexDistrict,
  setPaymentMethob,
} = appReducer.actions;
export default appReducer.reducer;
