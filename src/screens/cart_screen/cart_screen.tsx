/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, Image, TouchableOpacity, Button, TextInput, Modal, Alert } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button as ButtonPaper } from 'react-native-paper';

import styles from './cart_screen_styles';
import {
  getListCartUserService,
  chooseProductInCart,
  editAmountCart,
  changeClassifyOfCart,
  toggleChooseAllCart,
} from '../../services/api';
import { formatNumberToThousands } from '../../utils/common';

interface listCartProps {
  id: string;
  idUser: string;
  idProduct: string;
  amount: 4;
  idClassifyProduct: string;
  stt: number;
  isChoose: string;
  createdAt: string;
  updatedAt: string;
  classifyProduct: {
    id: string;
    idProduct: string;
    amount: number;
    nameClassifyProduct: string;
    STTImg: number;
    priceClassify: number;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    id: string;
    nameProduct: string;
    nameProductEn: string;
    priceProduct: string;
    idTypeProduct: string;
    idTrademark: string;
    contentHTML: string;
    contentMarkdown: string;
    isSell: string;
    sold: number;
    stt: number;
    createdAt: string;
    updatedAt: string;
    'imageProduct-product': [
      {
        idProduct: string;
        imagebase64: string;
        STTImage: number;
      },
    ];
    promotionProducts: [
      {
        idProduct: string;
        timePromotion: number;
        numberPercent: number;
      },
    ];
    'classifyProduct-product': [
      {
        id: string;
        idProduct: string;
        amount: number;
        nameClassifyProduct: string;
        STTImg: number;
        priceClassify: number;
      },
    ];
  };
}

const ItemProductCart = ({
  data,
  getListCart,
  handleOpenModelClassify,
}: {
  data: listCartProps;
  getListCart: any;
  handleOpenModelClassify: any;
}) => {
  const checkIsClassify = () => {
    if (!data || !data.classifyProduct) {
      return false;
    }
    if (data.classifyProduct.nameClassifyProduct === 'default') {
      return false;
    }
    return true;
  };

  const getRootPrice = () => {
    if (!data) {
      return 0;
    }
    if (data.classifyProduct.nameClassifyProduct === 'default') {
      return +data?.product?.priceProduct;
    }

    return data.classifyProduct.priceClassify;
  };

  const checkPromotion = (promotion: { timePromotion: number; numberPercent: number; idProduct: string }) => {
    if (!promotion) {
      return false;
    }

    if (promotion.numberPercent === 0) {
      return false;
    }
    let now = new Date().getTime();
    if (now > promotion?.timePromotion) {
      return false;
    }
    return true;
  };

  const getCurrentPrice = () => {
    if (!data) {
      return 0;
    }
    let rootPrice = getRootPrice();
    let isPromotion = checkPromotion(data?.product?.promotionProducts[0]);
    if (!isPromotion) {
      return rootPrice;
    }
    let price = (rootPrice * (100 - data?.product?.promotionProducts[0].numberPercent)) / 100;
    return price;
  };

  const getImageProduct = () => {
    if (!checkIsClassify()) {
      return data?.product['imageProduct-product'][0].imagebase64;
    }
    data?.product['imageProduct-product'].forEach(img => {
      if (img.STTImage === data.classifyProduct.STTImg) {
        return img.imagebase64;
      }
    });

    return data?.product['imageProduct-product'][0].imagebase64;
  };

  const handleClickCheckbox = async (id: string) => {
    console.log(id);

    let res = await chooseProductInCart({ accessToken: 'empty', id });
    console.log(res);
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handlePrevAmount = async () => {
    let res = await editAmountCart({
      accessToken: 'empty',
      id: data.id,
      typeEdit: 'prev',
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handleNextAmount = async () => {
    let res = await editAmountCart({
      accessToken: 'empty',
      id: data.id,
      typeEdit: 'next',
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handleChangeInputAmount = async (value: string) => {
    console.log(typeof +value, +value);

    if (typeof +value !== 'number' || +value === 0) {
      return;
    }

    // return;
    let res = await editAmountCart({
      accessToken: 'empty',
      id: data.id,
      typeEdit: 'value',
      value: value,
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  return (
    <View style={styles.CartScreen_listProduct_product}>
      <View style={styles.CartScreen_listProduct_product_checkbox}>
        <Checkbox
          status={data.isChoose === 'true' ? 'checked' : 'unchecked'}
          onPress={() => handleClickCheckbox(data.id)}
        />
      </View>
      <View style={styles.CartScreen_listProduct_product_wrap}>
        <Image style={styles.CartScreen_listProduct_product_wrap_image} source={{ uri: getImageProduct() }} />
        <View style={styles.CartScreen_listProduct_product_wrap_content}>
          <Text style={styles.CartScreen_listProduct_product_wrap_content_name} numberOfLines={2} ellipsizeMode="tail">
            {data?.product?.nameProduct}
          </Text>
          <TouchableOpacity onPress={() => handleOpenModelClassify(data)}>
            {checkIsClassify() && (
              <View style={styles.CartScreen_listProduct_product_wrap_content_classify}>
                <Text style={styles.CartScreen_listProduct_product_wrap_content_classify_text}>
                  Phân loại: {data?.classifyProduct?.nameClassifyProduct}
                </Text>
                <Icon name="down" size={16} color="#000" />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.CartScreen_listProduct_product_wrap_content_wrapPrice}>
            <Text style={styles.CartScreen_listProduct_product_wrap_content_wrapPrice_root}>
              {checkPromotion(data?.product?.promotionProducts[0]) && formatNumberToThousands(getRootPrice()) + '₫'}
            </Text>
            <Text style={styles.CartScreen_listProduct_product_wrap_content_wrapPrice_current}>
              {data && formatNumberToThousands(getCurrentPrice()) + '₫'}
            </Text>
          </View>
          <View style={styles.CartScreen_listProduct_product_wrap_content_amount}>
            <Button title="-" onPress={handlePrevAmount} />
            <TextInput
              defaultValue={data.amount + ''}
              style={styles.CartScreen_listProduct_product_wrap_content_amount_input}
              inputMode="numeric"
              onChangeText={text => handleChangeInputAmount(text)}
            />
            <Button title="+" onPress={handleNextAmount} />
          </View>
        </View>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }: { navigation: any }) => {
  const [listCart, setListCart] = React.useState<listCartProps[] | null>([]);
  const [openModalChooseClassify, setOpenModalChooseClassify] = React.useState(false);
  const [currentCartOfModel, setCurrentCartOfModal] = React.useState<any>(null);

  React.useEffect(() => {
    getListCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!currentCartOfModel) {
      return;
    }
    let newObj = listCart?.find(item => item.id === currentCartOfModel.id);
    setCurrentCartOfModal(newObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCart]);

  const getListCart = async () => {
    let res = await getListCartUserService();
    if (res?.errCode === 0) {
      setListCart(res.data);
      navigation.setOptions({
        title: 'Giỏ hàng (' + res.data.length + ')',
      });
    }
  };

  const handleOpenModelClassify = (item: any) => {
    setCurrentCartOfModal(item);
    setOpenModalChooseClassify(true);
  };

  const checkIsClassify = () => {
    if (!currentCartOfModel || !currentCartOfModel.classifyProduct) {
      return false;
    }
    if (currentCartOfModel.classifyProduct.nameClassifyProduct === 'default') {
      return false;
    }
    return true;
  };

  const getImageProduct = () => {
    if (!checkIsClassify()) {
      return currentCartOfModel?.product['imageProduct-product'][0].imagebase64;
    }
    currentCartOfModel?.product['imageProduct-product'].forEach(function (img: any) {
      if (img.STTImage === currentCartOfModel.classifyProduct.STTImg) {
        return img.imagebase64;
      }
    });

    return currentCartOfModel?.product['imageProduct-product'][0].imagebase64;
  };

  const getRootPrice = () => {
    if (!currentCartOfModel) {
      return 0;
    }
    if (currentCartOfModel.classifyProduct.nameClassifyProduct === 'default') {
      return +currentCartOfModel?.product?.priceProduct;
    }

    return currentCartOfModel.classifyProduct.priceClassify;
  };

  const checkPromotion = (promotion: { timePromotion: number; numberPercent: number; idProduct: string }) => {
    if (!promotion) {
      return false;
    }

    if (promotion.numberPercent === 0) {
      return false;
    }
    let now = new Date().getTime();
    if (now > promotion?.timePromotion) {
      return false;
    }
    return true;
  };

  const getCurrentPrice = () => {
    if (!currentCartOfModel) {
      return 0;
    }
    let rootPrice = getRootPrice();
    let isPromotion = checkPromotion(currentCartOfModel?.product?.promotionProducts[0]);
    if (!isPromotion) {
      return rootPrice;
    }
    let price = (rootPrice * (100 - currentCartOfModel?.product?.promotionProducts[0].numberPercent)) / 100;
    return price;
  };

  const handlePrevAmount = async () => {
    let res = await editAmountCart({
      accessToken: 'empty',
      id: currentCartOfModel.id,
      typeEdit: 'prev',
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handleNextAmount = async () => {
    let res = await editAmountCart({
      accessToken: 'empty',
      id: currentCartOfModel.id,
      typeEdit: 'next',
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handleChangeInputAmount = async (value: string) => {
    console.log(typeof +value, +value);

    if (typeof +value !== 'number' || +value === 0) {
      return;
    }

    // return;
    let res = await editAmountCart({
      accessToken: 'empty',
      id: currentCartOfModel.id,
      typeEdit: 'value',
      value: value,
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const handleChangeClassifyOfCart = async (idClassify: string) => {
    let res = await changeClassifyOfCart({
      accessToken: 'empty',
      idClassify: idClassify,
      idCart: currentCartOfModel.id,
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const isCheckAll = () => {
    if (!listCart) {
      return false;
    }
    let check = true;
    listCart?.forEach(item => {
      if (item.isChoose === 'false') {
        check = false;
      }
    });
    return check;
  };

  const handleToggleCheckAll = async () => {
    let res = await toggleChooseAllCart({
      accessToken: 'empty',
      type: !isCheckAll(),
    });
    if (res?.errCode === 0) {
      getListCart();
    }
  };

  const getTotals = () => {
    if (!listCart) {
      return 0;
    }
    let price = 0;
    listCart?.forEach(item => {
      if (item.isChoose === 'true') {
        let rootPrice = 0;
        if (item.classifyProduct.nameClassifyProduct === 'default') {
          rootPrice = +item.product.priceProduct;
        } else {
          rootPrice = +item.classifyProduct.priceClassify;
        }

        if (checkPromotion(item.product.promotionProducts[0])) {
          rootPrice = (rootPrice * (100 - item.product.promotionProducts[0].numberPercent)) / 100;
        }
        price = price + rootPrice * item.amount;
      }
    });
    return price;
  };

  const checkIsChooseCart = () => {
    let check = false;
    listCart?.forEach(item => {
      if (item.isChoose === 'true') {
        check = true;
      }
    });
    return check;
  };

  const handleBuy = () => {
    let check = checkIsChooseCart();

    if (!check) {
      Alert.alert('Chú ý', 'Vui lòng chọn sản phẩm', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.CartScreen_container}>
      <ScrollView style={styles.CartScreen_listProduct}>
        {listCart?.map(item => (
          <ItemProductCart
            key={item.id}
            data={item}
            getListCart={getListCart}
            handleOpenModelClassify={handleOpenModelClassify}
          />
        ))}
      </ScrollView>
      <Modal
        visible={openModalChooseClassify}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenModalChooseClassify(!openModalChooseClassify);
        }}>
        {currentCartOfModel && openModalChooseClassify && (
          <View style={styles.modal_changeCart}>
            <View style={styles.modal_changeCart_btnClose}>
              <TouchableOpacity onPress={() => setOpenModalChooseClassify(!openModalChooseClassify)}>
                <Icon name="close" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.modal_changeCart_top}>
              <Image style={styles.modal_changeCart_top_image} source={{ uri: getImageProduct() }} />
              <View style={styles.modal_changeCart_top_wrap}>
                <Text style={styles.modal_changeCart_top_wrap_price}>
                  {currentCartOfModel && formatNumberToThousands(getCurrentPrice()) + '₫'}
                </Text>
                <Text style={styles.modal_changeCart_top_wrap_amount}>Kho: 68</Text>
              </View>
            </View>
            {checkIsClassify() && (
              <View style={styles.modal_changeCart_classify}>
                <Text style={styles.modal_changeCart_classify_title}>Phân loại:</Text>
                <View style={styles.modal_changeCart_classify_list}>
                  {currentCartOfModel?.product['classifyProduct-product']?.map((item: any) => {
                    if (item.id === currentCartOfModel.classifyProduct.id) {
                      return (
                        <Text
                          key={item.id}
                          style={[styles.modal_changeCart_classify_item, { backgroundColor: 'orange', color: '#fff' }]}>
                          {item.nameClassifyProduct}
                        </Text>
                      );
                    }
                    return (
                      <TouchableOpacity key={item.id} onPress={() => handleChangeClassifyOfCart(item.id)}>
                        <Text style={styles.modal_changeCart_classify_item}>{item.nameClassifyProduct}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}
            <View style={styles.modal_changeCart_wrapAmount}>
              <Text style={styles.modal_changeCart_wrapAmount_title}>Số lượng:</Text>
              <View style={styles.modal_changeCart_wrapAmount_groupBtns}>
                <Button title="-" onPress={handlePrevAmount} />
                <TextInput
                  value={currentCartOfModel.amount + ''}
                  style={styles.modal_changeCart_wrapAmount_groupBtns_input}
                  onChangeText={text => handleChangeInputAmount(text)}
                />
                <Button title="+" onPress={handleNextAmount} />
              </View>
            </View>
            <Button title="Xác nhận" onPress={() => setOpenModalChooseClassify(!openModalChooseClassify)} />
          </View>
        )}
        <TouchableOpacity
          style={styles.modal_changeCart_overlay}
          onPress={() => setOpenModalChooseClassify(!openModalChooseClassify)}
        />
      </Modal>
      {listCart && listCart.length !== 0 && (
        <View style={styles.CartScreen_footer}>
          <View style={styles.CartScreen_footer_all}>
            <Checkbox status={isCheckAll() ? 'checked' : 'unchecked'} onPress={() => handleToggleCheckAll()} />
            <Text style={styles.CartScreen_footer_all_text}>Tất cả</Text>
          </View>
          <View style={styles.CartScreen_footer_totals}>
            <Text style={styles.CartScreen_footer_totals_title}>Tổng thanh toán: </Text>
            <Text style={styles.CartScreen_footer_totals_price}>
              {listCart && formatNumberToThousands(getTotals()) + '₫'}
            </Text>
          </View>
          <View style={styles.CartScreen_footer_btnBuy}>
            <ButtonPaper mode="contained" onPress={handleBuy} disabled={!checkIsChooseCart()}>
              Mua hàng
            </ButtonPaper>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
