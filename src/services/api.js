/* eslint-disable prettier/prettier */
// import axios from '../services/axios';
import axios from 'axios';

const getSuggestProduct = async () => {
    try {
        return await axios.get(
            'http://localhost:4000/api/v2/get-suggest-product-mobile'
        );
    } catch (error) {
        console.log(error.message);
        if (error?.response?.data) return error?.response?.data;
        return {
            errCode: -1,
            errMessage: 'Khong bat duoc loi',
            // error: JSON.stringify(error),
        };
    }
};

export { getSuggestProduct };
