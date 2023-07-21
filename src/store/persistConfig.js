/* eslint-disable prettier/prettier */
// src/store/persistConfig.js
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import tùy chọn transform nếu bạn muốn tuỳ chỉnh việc lưu trữ
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root', // Khóa để lưu trữ các state của ứng dụng
    storage: AsyncStorage, // Đối tượng AsyncStorage để lưu trữ
    // Các tùy chọn khác tùy theo yêu cầu của bạn
    // whitelist: ['theme', 'language'], // Tên các reducer muốn persist
    // blacklist: ['anotherReducerName'], // Tên các reducer muốn loại trừ khỏi persist
    // transforms: [yourTransform], // Các transform nếu bạn muốn tuỳ chỉnh việc lưu trữ
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
