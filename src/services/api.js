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

const getListCartUserService = async data => {
  try {
    return await axios.get('/api/v1/get-list-cart-user', { params: { accessToken: 'empty' } });
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

const chooseProductInCart = async data => {
  try {
    return await axios.put('/api/v1/choose-product-in-cart', data);
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

const editAmountCart = async data => {
  try {
    return await axios.put('/api/v1/edit-amount-cart-user', data);
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

const changeClassifyOfCart = async data => {
  try {
    return await axios.put('/api/v1/update-classify-product-in-cart', data);
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

const toggleChooseAllCart = async data => {
  try {
    return await axios.put('/api/v1/choose-all-product-in-cart', data);
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

const getListAddressUserServices = async data => {
  try {
    return await axios.get('/api/v1/get-address-user', { params: { accessToken: 'empty' } });
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

const setDefaultAddressService = async data => {
  try {
    return await axios.put('/api/v1/set-default-address', data);
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

const addNewAddressUser = async data => {
  try {
    return await axios.post('/api/v1/add-new-address-user', data);
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

const createNewBillByHand = async data => {
  try {
    return await axios.post('/api/v1/create-new-bill', data);
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

const getListBillByType = async (type, offset) => {
  try {
    return await axios.get(`/api/v1/get-list-bill-by-type?accessToken=empty&type=${type}&offset=${offset}`);
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

const cancelBill = async data => {
  try {
    return await axios.put(`/api/v1/user-cancel-bill`, data);
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

const recieveBill = async data => {
  try {
    return await axios.put('/api/v1/has-received-product', data);
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

const rePurchaseBill = async data => {
  try {
    return await axios.post('/api/v1/user-repurchase-bill', data);
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

const getDetailBill = async data => {
  try {
    return await axios.get('/api/v2/get-detail-bill-by-id', { params: data });
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

const createEvaluate = async data => {
  try {
    return await axios.post('/api/v1/create-new-evaluate-product', data);
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

const getDetailBillEvaluate = async data => {
  try {
    return await axios.get('/api/v2/get-detail-bill-by-id-2', { params: data });
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

const updateEvaluate = async data => {
  try {
    return await axios.put('/api/v1/update-evaluate-product', data);
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

const getListShortVideo = async data => {
  try {
    return await axios.get('/api/v1/get-list-short-video', { params: data });
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

const getListBlogForyou = async data => {
  try {
    return await axios.get('/api/v1/get-list-blog', { params: data });
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

const getListNotidyByType = async data => {
  try {
    return await axios.get('/api/v1/get-list-notify-by-type', { params: data });
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

const getUserLogin = async () => {
  try {
    return await axios.get('/api/get-user-login');
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
  getListCartUserService,
  chooseProductInCart,
  editAmountCart,
  changeClassifyOfCart,
  toggleChooseAllCart,
  getListAddressUserServices,
  setDefaultAddressService,
  addNewAddressUser,
  createNewBillByHand,
  getListBillByType,
  cancelBill,
  recieveBill,
  rePurchaseBill,
  getDetailBill,
  createEvaluate,
  getDetailBillEvaluate,
  updateEvaluate,
  getListShortVideo,
  getListBlogForyou,
  getListNotidyByType,
  getUserLogin,
};
