/* eslint-disable prettier/prettier */
// src/store/rootSaga.js
import { all } from 'redux-saga/effects';
// Import tất cả các saga đã tạo
import appSaga from './appSaga';

export default function* rootSaga() {
    yield all([appSaga()]);
}
