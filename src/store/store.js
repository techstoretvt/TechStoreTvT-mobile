/* eslint-disable prettier/prettier */
// src/store/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootSaga from './rootSaga';
import persistedReducer from './persistConfig';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    ...getDefaultMiddleware({
        thunk: false, // Vì Redux Toolkit đã tích hợp sẵn Thunk Middleware
        serializableCheck: false, // Vô hiệu hóa kiểm tra serializable (nếu bạn sử dụng Redux Toolkit >= 1.5.0)
    }),
    sagaMiddleware,
];

const store = configureStore({
    reducer: persistedReducer,
    middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
