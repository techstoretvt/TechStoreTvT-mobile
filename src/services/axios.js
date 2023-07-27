/* eslint-disable prettier/prettier */
import axios from 'axios';
import { REACT_APP_URL_BACKEND } from '../utils/constant';

const instance = axios.create({
    baseURL: REACT_APP_URL_BACKEND,
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Xử lý lỗi khi gặp lỗi trong phản hồi
        return Promise.reject(error);
    }
);

export default instance;
