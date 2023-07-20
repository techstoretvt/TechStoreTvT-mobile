/* eslint-disable prettier/prettier */
// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
// Import tất cả các reducer đã tạo
import appReducer from './appReducer';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;
