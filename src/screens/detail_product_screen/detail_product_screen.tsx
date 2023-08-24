/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  RefreshControl,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import React from 'react';
import ImageView from 'react-native-image-viewing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge, AirbnbRating, Avatar, Skeleton, Button } from '@rneui/themed';
import RenderHtml from 'react-native-render-html';
import Video from 'react-native-video';

import styles from './detail_product_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';
import { typeProdutView } from '../../utils/interface';
import Card_product from '../../components/card_product/card_product';
import {
  getListMayLikeService,
  getProductByIdService,
  getEvaluateProductByIdProduct,
  userAddCartProductService,
} from '../../services/api';
import { formatNumberToThousands } from '../../utils/common';
import { REACT_APP_URL_FRONTEND } from '../../utils/constant';
import MarkUpdate from '../../components/mark_update/mark_update';

const windowWidth = Dimensions.get('window').width;

//   {
//     uri: 'https://source.unsplash.com/random?sig=1',
//   },
//   {
//     uri: 'https://source.unsplash.com/random?sig=2',
//   },
//   {
//     uri: 'https://source.unsplash.com/random?sig=3',
//   },
//   {
//     uri: 'https://source.unsplash.com/random?sig=4',
//   },
//   {
//     uri: 'https://source.unsplash.com/random?sig=5',
//   },
// ];

const defaultListSuggestProduct_item: typeProdutView = {
  id: 'empty',
  nameProduct: 'string',
  priceProduct: 'string',
  sold: 0,
  isSell: 'string',
  contentHTML: 'string',
  trademark: {
    nameTrademark: 'string',
    nameTrademarkEn: 'string',
    idTypeProduct: 'string',
  },
  promotionProducts: [
    {
      idProduct: 'string',
      timePromotion: 0,
      numberPercent: 0,
    },
  ],
  'imageProduct-product': [
    {
      idProduct: 'string',
      STTImage: 0,
      imagebase64: 'string',
    },
  ],
  'classifyProduct-product': [
    {
      id: 'string',
      idProduct: 'string',
      amount: 0,
      STTImg: 0,
      nameClassifyProduct: 'string',
      priceClassify: 0,
    },
  ],
  typeProduct: {
    nameTypeProduct: 'string',
    nameTypeProductEn: 'string',
    imageTypeProduct: 'string',
    stt: 0,
  },
};

const defaultListSuggestProduct: typeProdutView[] = [
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
  defaultListSuggestProduct_item,
];

type inforEvaluateType = {
  amoutFiller: number;
  amount5star: number;
  amount4star: number;
  amount3star: number;
  amount2star: number;
  amount1star: number;
  amountComment: number;
  amountImage: number;
  amountVideo: number;
  avgStar: number;
};

type listEvaluateType = {
  id: string;
  idUser: string;
  idProduct: string;
  starNumber: 5;
  content: string;
  stt: number;
  displayname: string;
  idDetailBill: string;
  createdAt: string;
  updatedAt: string;
  User: {
    firstName: string;
    lastName: string;
    typeAccount: string;
    avatar: string | null;
    avatarGoogle: string | null;
    avatarFacebook: string | null;
    avatarGithub: string | null;
    avatarUpdate: string | null;
  };
  detailBill: {
    id: string;
    classifyProduct: {
      nameClassifyProduct: string;
    };
  };
  imageEvaluateProducts: [
    {
      id: string;
      idEvaluateProduct: string;
      imagebase64: string;
      idCloudinary: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
  videoEvaluateProduct: {
    id: string;
    idEvaluateProduct: string;
    videobase64: string;
    idGGDrive: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

interface DetailProductScreenProps {
  navigation: any;
  route: any;
}

const DetailProductScreen = ({ route, navigation }: DetailProductScreenProps) => {
  const params = route.params;
  const insets = useSafeAreaInsets();
  const scrollView = React.useRef(null);

  const [openLightBox, setOpenLightBox] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [moreContent, setMoreContent] = React.useState(false);
  const [listSuggesProduct, setListSuggestProduct] = React.useState<typeProdutView[]>(defaultListSuggestProduct);
  const [infoProduct, setInfoProduct] = React.useState<typeProdutView | null>(null);
  const [indexClassify, setIndexClassify] = React.useState(0);
  const [listEvaluate, setListEvaluate] = React.useState<listEvaluateType[] | null>(null);
  const [infoEvaluate, setInfoEvaluate] = React.useState<inforEvaluateType | null>(null);
  const [listImageLighBox, setListImageLightBox] = React.useState([]);
  const [indexLightBox, setIndexLightBox] = React.useState(0);
  const [countSelect, setCountSelect] = React.useState('1');
  const [openModalAddCart, setOpenModalAddCart] = React.useState(false);

  React.useEffect(() => {
    if (params.idProduct) {
      getInfoProduct();
      getEvaluateProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.idProduct]);

  React.useEffect(() => {
    if (infoProduct) {
      getSuggestProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoProduct]);

  React.useEffect(() => {
    if (!infoProduct) {
      return;
    }
    if (+countSelect < 1) {
      setCountSelect('1');
    }
    if (+countSelect > getInventory()) {
      setCountSelect(getInventory() + '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countSelect]);

  let getSuggestProduct = async () => {
    let idProductCurrent = params.idProduct;
    let nameTypeProduct = infoProduct?.typeProduct?.nameTypeProduct;
    let res = await getListMayLikeService({ idProductCurrent, nameTypeProduct });
    if (res?.errCode === 0) {
      setListSuggestProduct(res.data);
    }
  };

  let getInfoProduct = async () => {
    let idProduct = params.idProduct;
    let res = await getProductByIdService(idProduct);
    if (res?.errCode === 0) {
      let imgs = res.data['imageProduct-product'].map((item: { imagebase64: string }) => ({ uri: item.imagebase64 }));
      setListImageLightBox(imgs);
      setInfoProduct(res.data);
    }
  };

  let getEvaluateProduct = async () => {
    let idProduct = params.idProduct;
    let fillter = 'all';
    let page = '1';
    let offset = 5;
    let res = await getEvaluateProductByIdProduct({ idProduct, fillter, page, offset });
    if (res?.errCode === 0) {
      setListEvaluate(res.data);
      setInfoEvaluate({
        amoutFiller: res.amoutFiller,
        amount5star: res.amount5star,
        amount4star: res.amount4star,
        amount3star: res.amount3star,
        amount2star: res.amount2star,
        amount1star: res.amount1star,
        amountComment: res.amountComment,
        amountImage: res.amountImage,
        amountVideo: res.amountVideo,
        avgStar: res.avgStar,
      });
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    resetState();
    await getInfoProduct();
    getEvaluateProduct();
    getSuggestProduct();
    setRefreshing(false);
  };

  const resetState = () => {
    setInfoProduct(null);
    setIndexClassify(0);
    setListEvaluate(null);
    setInfoEvaluate(null);
    setListImageLightBox([]);
    setIndexLightBox(0);
    setOpenLightBox(false);
    setListSuggestProduct(defaultListSuggestProduct);
  };

  const getRootPrice = () => {
    if (!infoProduct) {
      return 0;
    }
    if (
      !infoProduct['classifyProduct-product'] ||
      !infoProduct['classifyProduct-product'][0] ||
      !infoProduct['classifyProduct-product'][0].nameClassifyProduct ||
      infoProduct['classifyProduct-product'][0].nameClassifyProduct === 'default'
    ) {
      return +infoProduct.priceProduct;
    }

    return infoProduct['classifyProduct-product'][0].priceClassify;
  };

  const checkPromotion = (promotion: { timePromotion: number; numberPercent: number }) => {
    if (!promotion) {
      return false;
    }

    if (promotion.numberPercent === 0) {
      return false;
    }
    let now = new Date().getTime();
    if (now > promotion.timePromotion) {
      return false;
    }
    return true;
  };

  const getCurrentPrice = () => {
    if (!infoProduct) {
      return 0;
    }
    let rootPrice = getRootPrice();
    let isPromotion = checkPromotion(infoProduct.promotionProducts[0]);
    if (!isPromotion) {
      return rootPrice;
    }
    let price = (rootPrice * (100 - infoProduct.promotionProducts[0].numberPercent)) / 100;
    return price;
  };

  const checkIsClassify = () => {
    if (!infoProduct || !infoProduct['classifyProduct-product']) {
      return false;
    }
    if (
      infoProduct['classifyProduct-product']?.length === 1 &&
      infoProduct['classifyProduct-product'][0]?.nameClassifyProduct === 'default'
    ) {
      return false;
    }
    return true;
  };

  const getInventory = () => {
    if (!infoProduct) {
      return 0;
    }
    let classifies = infoProduct['classifyProduct-product'];
    if (!checkIsClassify()) {
      return classifies[0].amount;
    }
    return classifies[indexClassify].amount;
  };

  const getAvatarUser = (user: {
    firstName: string;
    lastName: string;
    typeAccount: string;
    avatar: string | null;
    avatarGoogle: string | null;
    avatarFacebook: string | null;
    avatarGithub: string | null;
    avatarUpdate: string | null;
  }) => {
    let baseAvt = REACT_APP_URL_FRONTEND + '/_next/static/media/no-user-image.84801268.jpg';
    if (!user) {
      return baseAvt;
    }
    if (user.typeAccount === 'web') {
      return user.avatar || user.avatarUpdate || baseAvt;
    }

    if (user.typeAccount === 'facebook') {
      return user.avatarUpdate || user.avatarFacebook || baseAvt;
    }

    if (user.typeAccount === 'google') {
      return user.avatarUpdate || user.avatarGoogle || baseAvt;
    }

    if (user.typeAccount === 'github') {
      return user.avatarUpdate || user.avatarGithub || baseAvt;
    }

    return baseAvt;
  };

  const handleOpenLightBox = (index: number) => {
    setOpenLightBox(true);
    setIndexLightBox(index);
  };

  const getImageClassidy = () => {
    if (!infoProduct) {
      return 'https://source.unsplash.com/random?sig=1';
    }
    let sttImage = infoProduct['classifyProduct-product'][indexClassify].STTImg;
    infoProduct['imageProduct-product']?.map(item => {
      if (item.STTImage === sttImage) {
        return item.imagebase64;
      }
    });
    return infoProduct['imageProduct-product'][0].imagebase64;
  };

  const addCartProduct = async () => {
    if (!infoProduct) {
      return;
    }
    let data = {
      idProduct: params.idProduct,
      amount: countSelect,
      idClassifyProduct: infoProduct['classifyProduct-product'][indexClassify].id,
      accessToken: 'empty',
    };
    console.log('data: ', data);

    let res = await userAddCartProductService(data);
    console.log(res);

    if (res?.errCode === 0) {
      Alert.alert('Đã thêm vào giỏ hàng');
    } else {
      Alert.alert(res?.errMessage || 'error');
    }
  };

  if (!infoProduct) {
    return (
      <>
        <Skeleton animation="pulse" height={windowWidth * 0.9} />
        <Skeleton animation="pulse" height={20} style={{ marginTop: 10 }} />
        <Skeleton animation="pulse" height={30} style={{ marginTop: 6 }} />
        <Skeleton animation="pulse" height={30} style={{ marginTop: 6 }} />
        <Skeleton animation="pulse" height={40} style={{ marginTop: 6 }} />
        <View style={styles.suggestions}>
          <View style={styles.suggestions_header}>
            <View style={styles.suggestions_header_sparate} />
            <Text style={styles.suggestions_header_text}>Có thể bạn cũng thích</Text>
            <View style={styles.suggestions_header_sparate} />
          </View>
          <View style={styles.suggestions_listProduct}>
            {listSuggesProduct?.map((item, index) => (
              <View key={item.id + index.toString()} style={styles.suggestions_listProduct_item}>
                <Card_product data={item} navigation={navigation} />
              </View>
            ))}
          </View>
        </View>
      </>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      keyboardVerticalOffset={10}>
      <ScrollView ref={scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.DetailProduct_container}>
          <FocusAwareStatusBar translucent backgroundColor="transparent" />
          <View style={[styles.header, { paddingTop: insets.top + 10, opacity: openLightBox ? 0 : 1 }]}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <View style={styles.header_goBack}>
                <Icon name="arrow-left" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
            <View style={styles.header_wrapIcon}>
              {/* <View style={styles.header_wrapIcon_icon}>
                <Icon name="share" size={20} color="#fff" />
              </View> */}
              <TouchableOpacity style={styles.header_wrapIcon_icon} onPress={() => navigation.navigate('Cart')}>
                <Icon name="cart-plus" size={26} color="#fff" />
                <Badge
                  value={10}
                  status="error"
                  // eslint-disable-next-line react-native/no-inline-styles
                  containerStyle={{
                    position: 'absolute',
                    top: -6,
                    right: -8,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.wrapImages]}>
            <Swiper
              showsButtons={false}
              horizontal={true}
              dotColor="#fff"
              showsPagination={true}
              // eslint-disable-next-line react-native/no-inline-styles
              paginationStyle={{
                bottom: 4,
              }}
              loop={false}>
              {infoProduct !== null &&
                infoProduct['imageProduct-product'] &&
                infoProduct['imageProduct-product']?.map((item, index) => (
                  <TouchableWithoutFeedback key={item.STTImage + index} onPress={() => handleOpenLightBox(index)}>
                    <Image source={{ uri: item.imagebase64 }} style={styles.wrapImages_image} />
                  </TouchableWithoutFeedback>
                ))}
            </Swiper>
            {!infoProduct && <Skeleton animation="pulse" height={windowWidth * 0.9} />}
          </View>
          <View style={styles.content}>
            <View style={styles.content_nameProduct}>
              {infoProduct && (
                <Text style={styles.content_nameProduct_text}>
                  {infoProduct?.nameProduct?.charAt(0).toUpperCase() + infoProduct?.nameProduct?.slice(1)}
                </Text>
              )}
              {!infoProduct && <Skeleton animation="pulse" height={20} />}
            </View>
            <View style={styles.content_wrapStatus}>
              <View style={styles.content_status}>
                <Text style={styles.content_status_title}>Tình trạng:</Text>
                <Text style={styles.content_status_content}>
                  {infoProduct?.isSell === 'true' ? 'Đang bán' : 'Tạm dừng'}
                </Text>
              </View>
              <View style={styles.content_wrapStatus_separate} />
              <View style={styles.content_trademark}>
                <Text style={styles.content_trademark_title}>Thương hiệu:</Text>
                <Text style={styles.content_trademark_content}>{infoProduct?.trademark?.nameTrademark}</Text>
              </View>
            </View>
            <View style={styles.content_evaluate}>
              {infoEvaluate?.amoutFiller !== 0 && (
                <View style={styles.content_evaluate_wrap}>
                  <View style={styles.content_evaluate_wrap_star}>
                    <Text style={styles.content_evaluate_wrap_star_text}>{infoEvaluate?.avgStar}</Text>
                    <View style={styles.content_evaluate_wrap_star_icon}>
                      <AirbnbRating
                        isDisabled={true}
                        defaultRating={infoEvaluate?.avgStar}
                        size={16}
                        showRating={false}
                      />
                    </View>
                  </View>
                  <View style={styles.content_wrapStatus_separate} />
                  <View style={styles.content_evaluate_wrap_text}>
                    <Text style={styles.content_evaluate_wrap_text_number}>{infoEvaluate?.amoutFiller}</Text>
                    <Text style={styles.content_evaluate_wrap_text_title}>Đánh giá</Text>
                  </View>
                  <View style={styles.content_wrapStatus_separate} />
                  <View style={styles.content_evaluate_wrap_text}>
                    <Text style={styles.content_evaluate_wrap_text_number}>{infoProduct?.sold}</Text>
                    <Text style={styles.content_evaluate_wrap_text_title}>Đã bán</Text>
                  </View>
                </View>
              )}
              {infoEvaluate?.amoutFiller === 0 && (
                <View style={styles.content_evaluate_empty}>
                  <Text style={styles.content_evaluate_empty_text}>Chưa có đánh giá</Text>
                </View>
              )}
            </View>
            <View style={styles.content_price}>
              <View style={styles.content_price_current}>
                <Text style={styles.content_price_current_text}>
                  {infoProduct && formatNumberToThousands(getCurrentPrice()) + '₫'}
                </Text>
              </View>
              <View style={styles.content_priceRoot}>
                {infoProduct &&
                  infoProduct?.promotionProducts[0] &&
                  checkPromotion(infoProduct?.promotionProducts[0]) && (
                    <>
                      <Text style={styles.content_priceRoot_price}>
                        {formatNumberToThousands(getRootPrice()) + '₫'}
                      </Text>
                      <Text style={styles.content_priceRoot_persent}>
                        -{infoProduct?.promotionProducts[0]?.numberPercent}%
                      </Text>
                    </>
                  )}
              </View>
            </View>
            <View style={styles.content_classify}>
              {checkIsClassify() && (
                <>
                  <View style={styles.content_classify_left}>
                    <Text style={styles.content_classify_left_title}>Phân loại:</Text>
                    <Text style={styles.content_classify_left_amount}>Kho: {getInventory()}</Text>
                  </View>
                  <View style={styles.content_classify_right}>
                    {infoProduct['classifyProduct-product']?.map((item, index) => (
                      <TouchableOpacity key={item.id + index} onPress={() => setIndexClassify(index)}>
                        <View
                          style={[
                            styles.content_classify_right_item,
                            { backgroundColor: index === indexClassify ? 'orange' : '#fff' },
                          ]}>
                          <Text
                            style={[
                              styles.content_classify_right_item_text,
                              {
                                color: index === indexClassify ? '#fff' : 'orange',
                              },
                            ]}>
                            {item.nameClassifyProduct}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </>
              )}
              {!checkIsClassify() && <Text style={{ color: '#000', fontSize: 18 }}>Kho: {getInventory()}</Text>}
            </View>
          </View>
          <View style={styles.introduces}>
            <View style={styles.introduces_wrapText}>
              <Text style={styles.introduces_wrapText_title}>Chính sách bán hàng</Text>
              <View style={styles.introduces_wrapText_listItem}>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-1.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Cam kết 100% chính hãng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-2.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Miễn phí giao hàng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-3.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Hỗ trợ 24/7</Text>
                </View>
              </View>
            </View>
            <View style={styles.introduces_wrapText}>
              <Text style={styles.introduces_wrapText_title}>Thông tin thêm</Text>
              <View style={styles.introduces_wrapText_listItem}>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-4.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Hoàn tiền 111% nếu hàng giã</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-5.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Mở hợp kiểm tra nhận hàng</Text>
                </View>
                <View style={styles.introduces_wrapText_listItem_item}>
                  <Image
                    source={require('../../assets/images/DetailProduct/icon-6.webp')}
                    style={styles.introduces_wrapText_listItem_item_image}
                  />
                  <Text style={styles.introduces_wrapText_listItem_item_text}>Đổi trả trong 7 ngày</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.discription}>
            <Text style={styles.discription_title}>Mô tả sản phẩm</Text>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={[styles.discription_content, { height: moreContent ? 'auto' : 200 }]}>
              <RenderHtml
                contentWidth={300}
                source={{
                  html: infoProduct?.contentHTML,
                }}
              />
            </View>
            <View style={styles.discription_more}>
              <TouchableOpacity onPress={() => setMoreContent(!moreContent)}>
                <Text style={styles.discription_more_text}>{moreContent ? 'Thu gọn' : 'Xem thêm'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.evaluate}>
            <View style={styles.evaluate_header}>
              <View style={styles.evaluate_header_left}>
                <Text style={styles.evaluate_header_left_title}>Đánh giá sản phẩm</Text>
                <View style={styles.evaluate_header_left_wrap}>
                  <View style={styles.evaluate_header_left_wrap_star}>
                    <AirbnbRating
                      isDisabled={true}
                      defaultRating={infoEvaluate?.avgStar}
                      size={16}
                      showRating={false}
                    />
                  </View>
                  <Text style={styles.evaluate_header_left_wrap_persent}>{infoEvaluate?.avgStar}/5</Text>
                  <Text
                    style={styles.evaluate_header_left_wrap_amount}>{`(${infoEvaluate?.amoutFiller} đánh giá)`}</Text>
                </View>
              </View>
              <View style={styles.evaluate_header_right}>
                <MarkUpdate />
                <Text style={styles.evaluate_header_right_more}>Xem tất cả</Text>
                <View style={styles.evaluate_header_right_icon}>
                  <Icon name="angle-right" size={24} color="red" />
                </View>
              </View>
            </View>
            <View style={styles.evaluate_list}>
              {listEvaluate?.map((item, index) => (
                <View key={item.id + index} style={styles.evaluate_list_group}>
                  <View style={styles.evaluate_list_avatar}>
                    <Avatar size={32} rounded source={{ uri: getAvatarUser(item.User) }} />
                  </View>
                  <View style={styles.evaluate_list_content}>
                    <Text style={styles.evaluate_list_content_name}>
                      {item.User?.firstName + ' ' + item.User?.lastName}
                    </Text>
                    <View style={styles.evaluate_list_content_star}>
                      <AirbnbRating isDisabled={true} defaultRating={item.starNumber} size={14} showRating={false} />
                    </View>
                    <Text style={styles.evaluate_list_content_trademark}>
                      Phân loại:{' '}
                      {item.detailBill?.classifyProduct?.nameClassifyProduct !== 'default'
                        ? item.detailBill?.classifyProduct?.nameClassifyProduct
                        : ''}
                    </Text>
                    <Text style={styles.evaluate_list_content_text}>{item.content}</Text>
                    <ScrollView horizontal={true} style={styles.evaluate_list_content_media}>
                      {item.videoEvaluateProduct && (
                        <View style={styles.evaluate_list_content_media_wrapVideo}>
                          <Video
                            // source={require('../../assets/videos/videoTest.mp4')}
                            source={{ uri: item.videoEvaluateProduct.videobase64?.replace('view', 'preview') }}
                            style={styles.evaluate_list_content_media_wrapVideo_video}
                            resizeMode="contain"
                            repeat={true}
                            muted={true}
                          />
                        </View>
                      )}
                      <View style={styles.evaluate_list_content_media_listImage}>
                        {item.imageEvaluateProducts?.map((img, index2) => (
                          <Image
                            key={img.id + index2}
                            source={{ uri: img.imagebase64 }}
                            style={styles.evaluate_list_content_media_listImage_image}
                          />
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              ))}
              {listEvaluate?.length === 0 && <Text>Chưa có đánh giá</Text>}
            </View>

            <View style={styles.evaluate_more}>
              <Text style={styles.evaluate_more_text}>Xem tất cả ({infoEvaluate?.amoutFiller})</Text>
              <Icon name="angle-right" size={24} color="red" />
            </View>
          </View>
          <View style={styles.suggestions}>
            <View style={styles.suggestions_header}>
              <View style={styles.suggestions_header_sparate} />
              <Text style={styles.suggestions_header_text}>Có thể bạn cũng thích</Text>
              <View style={styles.suggestions_header_sparate} />
            </View>
            <View style={styles.suggestions_listProduct}>
              {listSuggesProduct?.map((item, index) => (
                <View key={item.id + index.toString()} style={styles.suggestions_listProduct_item}>
                  <Card_product data={item} navigation={navigation} />
                </View>
              ))}
            </View>
          </View>
          <ImageView
            images={listImageLighBox}
            imageIndex={indexLightBox}
            visible={openLightBox}
            onRequestClose={() => setOpenLightBox(false)}
            presentationStyle="overFullScreen"
            // onImageIndexChange={index => setIndexLightBox(index)}
            // backgroundColor="yellow"
            // eslint-disable-next-line react/no-unstable-nested-components, react-native/no-inline-styles
            FooterComponent={({ imageIndex }) => (
              <Text style={{ color: '#fff' }}>
                {imageIndex + 1}/{listImageLighBox.length}
              </Text>
            )}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModalAddCart}
        onRequestClose={() => {
          setOpenModalAddCart(!openModalAddCart);
        }}>
        <View style={styles.wrapModalAddCard}>
          <View style={styles.modalAddCard}>
            <TouchableOpacity style={styles.modalAddCard_iconClose} onPress={() => setOpenModalAddCart(false)}>
              <Icon name="times" size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.modalAddCard_top}>
              <Image source={{ uri: getImageClassidy() }} style={styles.modalAddCard_top_image} />
              <View style={styles.modalAddCard_top_wrapPrice}>
                <Text style={styles.modalAddCard_top_wrapPrice_textPrice}>
                  {infoProduct && formatNumberToThousands(getCurrentPrice()) + '₫'}
                </Text>
                <Text style={styles.modalAddCard_top_wrapPrice_textAmount}>Kho: {getInventory()}</Text>
              </View>
            </View>
            <View style={styles.modalAddCard_category}>
              <Text style={styles.modalAddCard_category_title}>Phân loại</Text>
              <View style={styles.modalAddCard_category_list}>
                {checkIsClassify() &&
                  infoProduct['classifyProduct-product']?.map((item, index) => (
                    <TouchableOpacity key={item.id + index} onPress={() => setIndexClassify(index)}>
                      <Text
                        style={[
                          styles.modalAddCard_category_list_item,
                          { backgroundColor: index === indexClassify ? 'orange' : '#ccc' },
                        ]}>
                        {' '}
                        {item.nameClassifyProduct}
                      </Text>
                    </TouchableOpacity>
                  ))}

                {!checkIsClassify() && <Text>Khong co phan loai</Text>}
              </View>
            </View>
            <View style={styles.amount}>
              <Text style={styles.amount_text}>Số lượng:</Text>
              <View style={styles.amount_wrap}>
                <Button
                  title="-"
                  buttonStyle={styles.amount_wrap_btn}
                  onPress={() =>
                    setCountSelect(prev => {
                      return +prev - 1 + '';
                    })
                  }
                />
                <TextInput
                  style={styles.amount_wrap_input}
                  value={countSelect}
                  keyboardType="numeric"
                  onChangeText={text => setCountSelect(text)}
                />
                <Button
                  title="+"
                  buttonStyle={styles.amount_wrap_btn}
                  onPress={() =>
                    setCountSelect(prev => {
                      return +prev + 1 + '';
                    })
                  }
                />
              </View>
            </View>
            <Button title="Thêm vào giỏ" onPress={addCartProduct} />
          </View>
          <TouchableOpacity onPress={() => setOpenModalAddCart(false)} style={styles.modalAddCard_overlay} />
        </View>
      </Modal>
      <View style={styles.btnBottoms}>
        <TouchableOpacity style={styles.btnBottoms_left} onPress={() => setOpenModalAddCart(true)}>
          <Text style={styles.btnBottoms_left_text}>Thêm vào giỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBottoms_right} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.btnBottoms_right_text}>Giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DetailProductScreen;
