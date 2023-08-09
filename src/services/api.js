/* eslint-disable prettier/prettier */
import axios from '../services/axios';

const getSuggestProduct = async listDiscard => {
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

const getListEventService = async () => {
  try {
    return await axios.get('/api/v1/get-list-event-promotion-home');
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

const getListPromotionProductService = async () => {
  try {
    return await axios.get('/api/v1/get-product-promotion-home');
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

const getListMayLikeService = async ({ idProductCurrent, nameTypeProduct }) => {
  try {
    return await axios.get('/api/v1/get-list-product-may-like', {
      params: { id: idProductCurrent, nameTypeProduct },
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

const getProductByIdService = async idProduct => {
  try {
    return await axios.get('/api/v1/get-product-by-id', {
      params: { idProduct },
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
const getEvaluateProductByIdProduct = async data => {
  try {
    return await axios.get('/api/v1/get-evaluate-by-id-product', {
      params: data,
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

const checkStartServerService = async () => {
  try {
    return await axios.get('/api/v1/check-start-server');
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

const userLoginService = async data => {
  try {
    return await axios.post('/api/user-login', data);
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

const userAddCartProductService = async data => {
  try {
    return await axios.post('/api/v1/add-product-to-cart', data);
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

export {
  getSuggestProduct,
  getAllTypeProduct,
  getListEventService,
  getListPromotionProductService,
  getListMayLikeService,
  getProductByIdService,
  getEvaluateProductByIdProduct,
  checkStartServerService,
  userLoginService,
  userAddCartProductService,
};
