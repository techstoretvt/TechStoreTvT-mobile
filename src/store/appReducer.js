/* eslint-disable prettier/prettier */
// src/store/yourReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Initial state của reducer
    theme: 'light', // Chủ đề mặc định là light (chủ đề sáng)
    language: 'en', // Ngôn ngữ mặc định là tiếng Anh
};

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Action để thay đổi chủ đề (theme)
        setTheme: (state, action) => {
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
