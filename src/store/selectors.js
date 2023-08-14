/* eslint-disable prettier/prettier */
// src/store/selectors.js
import { createSelector } from 'reselect';

// Selector để lấy thông tin về chủ đề (theme) từ state
const selectTheme = state => state.app.theme;

// Selector để lấy thông tin về ngôn ngữ (language) từ state
const selectLanguage = state => state.app.language;

const selectListAddressUser = state => state.app.listAddressUser;

const selectSearchCountry = state => state.app.searchCountry;

const selectSearchDistrict = state => state.app.searchDistrict;

const selectIndexCountry = state => state.app.indexCountry;

const selectIndexDistrict = state => state.app.indexDistrict;

const selectPaymentMethob = state => state.app.paymentMethob;

// Selector kết hợp thông tin về chủ đề và ngôn ngữ thành một đối tượng
const selectAppSettings = createSelector(
  selectTheme,
  selectLanguage,
  selectListAddressUser,
  (theme, language, listAddressUser) => ({
    theme,
    language,
    listAddressUser,
  }),
);

// Export các selectors để sử dụng trong các component khác
export {
  selectAppSettings,
  selectTheme,
  selectLanguage,
  selectListAddressUser,
  selectSearchCountry,
  selectIndexCountry,
  selectSearchDistrict,
  selectIndexDistrict,
  selectPaymentMethob,
};
