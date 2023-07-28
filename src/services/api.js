/* eslint-disable prettier/prettier */
import axios from '../services/axios';

const getSuggestProduct = async (listDiscard) => {
    try {
        return await axios.get('/api/v2/get-suggest-product-mobile', {
            params: {
                listDiscard,
            },
        });
    } catch (error) {
        if (error?.response?.data) {
            return error?.response?.data;
        }
        return {
            errCode: -1,
            errMessage: 'Khong bat duoc loi',
        };
    }
};

const getAllTypeProduct = async () => {
    try {
        return await axios.get('/api/get-all-type-product');
    } catch (error) {
        if (error?.response?.data) {
            return error?.response?.data;
        }
        return {
            errCode: -1,
            errMessage: 'Khong bat duoc loi',
        };
    }
};

export { getSuggestProduct, getAllTypeProduct };
