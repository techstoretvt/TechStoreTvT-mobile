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
        console.log(error);
        if (error?.response?.data) return error?.response?.data;
        return {
            errCode: -1,
            errMessage: 'Khong bat duoc loi',
            // error: JSON.stringify(error),
        };
    }
};

export { getSuggestProduct };
