/* eslint-disable prettier/prettier */
// src/store/selectors.js
import { createSelector } from 'reselect';

// Selector để lấy thông tin về chủ đề (theme) từ state
const selectTheme = (state) => state.app.theme;

// Selector để lấy thông tin về ngôn ngữ (language) từ state
const selectLanguage = (state) => state.app.language;

// Selector kết hợp thông tin về chủ đề và ngôn ngữ thành một đối tượng
const selectAppSettings = createSelector(
    selectTheme,
    selectLanguage,
    (theme, language) => ({
        theme,
        language,
    })
);

// Export các selectors để sử dụng trong các component khác
export { selectTheme, selectLanguage, selectAppSettings };
