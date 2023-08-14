/* eslint-disable prettier/prettier */
// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
// Import tất cả các reducer đã tạo
import appReducer from './appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: [
    'language',
    'listAddressUser',
    'searchCountry',
    'indexCountry',
    'searchDistrict',
    'indexDistrict',
    'paymentMethob',
  ],
  // whiteList: ['theme'],
};

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, appReducer),
});

export default rootReducer;
