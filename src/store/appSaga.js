/* eslint-disable prettier/prettier */
// src/store/appSaga.js
import { put, takeEvery } from 'redux-saga/effects';
import { setTheme, setLanguage } from './appReducer'; // Import action từ reducer

// Saga worker để xử lý action thay đổi chủ đề
function* changeThemeSaga(action) {
    try {
        // Xử lý logic thay đổi chủ đề ở đây (ví dụ: lưu vào AsyncStorage, LocalStorage)
        // Giả sử action.payload là tên chủ đề mới
        console.log('vao saga (action.payload): ', action.payload);
        yield put(setTheme(action.payload));
    } catch (error) {
        // Xử lý lỗi nếu cần
    }
}

// Saga worker để xử lý action thay đổi ngôn ngữ
function* changeLanguageSaga(action) {
    try {
        // Xử lý logic thay đổi ngôn ngữ ở đây (ví dụ: lưu vào AsyncStorage, LocalStorage)
        // Giả sử action.payload là mã ngôn ngữ mới
        yield put(setLanguage(action.payload));
    } catch (error) {
        // Xử lý lỗi nếu cần
    }
}

// Saga watcher để lắng nghe action thay đổi chủ đề và action thay đổi ngôn ngữ
function* appSagaWatcher() {
    yield takeEvery('CHANGE_THEME', changeThemeSaga); // Lắng nghe action có type 'CHANGE_THEME'
    yield takeEvery('CHANGE_LANGUAGE', changeLanguageSaga); // Lắng nghe action có type 'CHANGE_LANGUAGE'
}

export default appSagaWatcher;
