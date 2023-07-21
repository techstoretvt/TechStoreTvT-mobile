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
};

// getPersistedData('theme').then((theme) => {
//     if (theme) {
//         initialState.theme = theme; // Cập nhật trạng thái ban đầu với dữ liệu từ AsyncStorage
//     }
// });

// // Sử dụng hàm để lấy dữ liệu language từ AsyncStorage
// getPersistedData('language').then((language) => {
//     if (language) {
//         initialState.language = language; // Cập nhật trạng thái ban đầu với dữ liệu từ AsyncStorage
//     }
// });

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
    },
});

export const { setTheme, setLanguage } = appReducer.actions;
export default appReducer.reducer;
