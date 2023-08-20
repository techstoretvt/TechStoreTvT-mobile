/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AirbnbRating } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput, Button, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import { launchImageLibrary } from 'react-native-image-picker';

import styles from './evaluate_screen_styles';
import HeaderPurchase from '../../components/header_purchase/header_purchase';
import { createEvaluate, getDetailBillEvaluate, updateEvaluate } from '../../services/api';
import MarkUpdate from '../../components/mark_update/mark_update';

const EvaluateScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const insets = useSafeAreaInsets();
  const params = route.params;

  const [listImage, setListImage] = React.useState<any | null>(null);
  const [urlVideo, setUrlVideo] = React.useState<any | any>(null);
  const [star, setStar] = React.useState(5);
  const [note, setNote] = React.useState('');
  const [showName, setShowName] = React.useState(true);
  const [detailProduct, setDetailProduct] = React.useState<any | null>(null);

  React.useEffect(() => {
    handleGetDetailBill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetDetailBill = async () => {
    let res = await getDetailBillEvaluate({
      idDetailBill: params.idDetailBill,
    });
    if (res?.errCode === 0) {
      setDetailProduct(res.data);
      if (res.data.evaluateProducts[0]) {
        setStar(res.data.evaluateProducts[0].starNumber);
        setNote(res.data.evaluateProducts[0].content);
        setShowName(res.data.evaluateProducts[0].displayname === 'true');
      }
    }
  };

  const handleUploadImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    console.log(result);
    if (result.assets) {
      setListImage({
        uri: result.assets[0].uri,
      });
      //   let path = result.assets[0].uri;
    }
  };

  const handleUpLoadVide = async () => {
    const result = await launchImageLibrary({ mediaType: 'video' });
    console.log(result);
    if (result.assets) {
      let path = result.assets[0].uri;
      setUrlVideo(path);
    }
  };

  const handleEvaluete = async () => {
    if (detailProduct?.evaluateProducts[0]) {
      console.log('sua');
      let res = await updateEvaluate({
        accessToken: 'empty',
        idDetailBill: params.idDetailBill,
        star: star,
        listImage: [],
        text: note,
        displayname: showName + '',
      });

      if (res?.errCode === 0) {
        navigation.navigate('HomeStack', { screen: 'Home' });
      }
    } else {
      console.log('them');
      let data = {
        accessToken: 'empty',
        idDetailBill: params.idDetailBill,
        star: star,
        content: note,
        displayName: showName + '',
      };

      let res = await createEvaluate(data);
      if (res?.errCode === 0) {
        navigation.navigate('HomeStack', { screen: 'Home' });
      }
    }
  };

  const getClassifyProduct = () => {
    if (!detailProduct) {
      return '';
    }
    let text = detailProduct.classifyProduct.nameClassifyProduct;
    return text !== 'default' ? text : 'không có';
  };

  const getImageProduct = () => {
    if (!detailProduct) {
      return 'https://source.unsplash.com/random?sig=1';
    }
    if (getClassifyProduct() === 'không có') {
      return detailProduct.product['imageProduct-product'][0].imagebase64;
    }

    let image = 'https://source.unsplash.com/random?sig=1';
    let sttimg = detailProduct.classifyProduct.STTImg;
    detailProduct.product['imageProduct-product'].forEach((item: any) => {
      if (item.STTImage === sttimg) {
        image = item.imagebase64;
      }
    });

    return image;
  };

  return (
    <View style={[styles.Evaluate_container, { marginTop: insets.top }]}>
      <HeaderPurchase title="Đánh giá sản phẩm" goBack={null} />
      <ScrollView>
        <View style={styles.EvaluateScreen_product}>
          <Image source={{ uri: getImageProduct() }} style={styles.EvaluateScreen_product_img} />
          <View style={styles.EvaluateScreen_product_wrap}>
            <Text style={styles.EvaluateScreen_product_wrap_name} numberOfLines={1} ellipsizeMode="tail">
              {detailProduct?.product?.nameProduct}
            </Text>
            <Text style={styles.EvaluateScreen_product_wrap_classify}>Phân loại: {getClassifyProduct()}</Text>
          </View>
        </View>
        <View style={styles.EvaluateScreen_wrapStar}>
          <Text style={styles.EvaluateScreen_wrapStar_title}>Chất lượng sản phẩm</Text>
          <View>
            <AirbnbRating
              count={5}
              reviews={['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Tuyệt vời']}
              defaultRating={star}
              size={24}
              reviewSize={14}
              onFinishRating={value => setStar(value)}
            />
          </View>
        </View>
        <View style={styles.EvaluateScreen_note}>
          <TextInput
            //   label="Email"
            value={note}
            placeholder="Hãy chia sẽ nhận xét cho sản phẩm này nhé!"
            multiline={true}
            numberOfLines={8}
            onChangeText={text => setNote(text)}
          />
        </View>
        <View style={styles.EvaluateScreen_media}>
          <View style={styles.EvaluateScreen_media_listImg}>
            {listImage && (
              <View style={styles.EvaluateScreen_media_listImg_wrap}>
                <Image source={{ uri: listImage.uri }} style={styles.EvaluateScreen_media_listImg_img} />
                <View style={styles.EvaluateScreen_media_listImg_wrap_btnDelete}>
                  <TouchableOpacity>
                    <Icon name="times" size={20} color={'#000'} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <View style={styles.EvaluateScreen_media_video}>
            {urlVideo && (
              <Video
                source={{ uri: urlVideo }}
                // source={{ uri: item.videoEvaluateProduct.videobase64?.replace('view', 'preview') }}
                style={styles.EvaluateScreen_media_video_vd}
                resizeMode="contain"
                // repeat={true}
                muted={true}
                //   paused={true}
              />
            )}
          </View>
          <View style={styles.EvaluateScreen_media_btns}>
            <View style={{ flex: 1 }}>
              <Button icon="camera" mode="contained" onPress={() => handleUploadImage()} buttonColor="red">
                Thêm hình ảnh
              </Button>
              <MarkUpdate />
            </View>
            <View style={{ flex: 1 }}>
              <Button icon="video" mode="contained" onPress={() => handleUpLoadVide()} buttonColor="red">
                Thêm video
              </Button>
              <MarkUpdate />
            </View>
          </View>
        </View>
        <View style={styles.EvaluateScreen_settings}>
          <View style={styles.EvaluateScreen_settings_left}>
            <Text style={styles.EvaluateScreen_settings_left_title}>Cho phép hiển thị tên đăng nhập</Text>
            <Text style={styles.EvaluateScreen_settings_left_des}>
              Tên tài khoản của bạn sẽ hiển thị như {showName ? 'tranvana123' : 't***********3'}
            </Text>
          </View>
          <View style={styles.EvaluateScreen_settings_right}>
            <Switch value={showName} onValueChange={setShowName} />
          </View>
        </View>
      </ScrollView>
      <Button icon="account" mode="contained" onPress={() => handleEvaluete()} buttonColor="red">
        Gửi
      </Button>
    </View>
  );
};

export default EvaluateScreen;
