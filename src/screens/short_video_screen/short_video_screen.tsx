/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

import styles from './short_video_screen_styles';
import { getListShortVideo } from '../../services/api';

const ShortVideoScreen = ({ navigation }: { navigation: any }) => {
  const [listVideo, setListVideo] = React.useState<any | null>([]);
  const [listIdVideo, setListIdVideo] = React.useState<any | null>([]);
  const [blurScreen, setBlurScreen] = React.useState(false);
  // const [position,setPosition] = useState<number>(0);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // do something
      console.log('blur');
      setBlurScreen(true);
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      console.log('focus');
      setBlurScreen(false);
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    getListVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const getListVideo = async () => {
    let res = await getListShortVideo({
      listIdVideo: listIdVideo,
    });

    if (res?.errCode === 0) {
      let newData = [...listVideo, ...res.data];
      // console.log(res.data[0]);

      setListVideo(newData);
      let arrIdRes = res.data.map((item: any) => item.id);
      let newArrId = [...listIdVideo, ...arrIdRes];
      setListIdVideo(newArrId);
    }
  };

  const handleOnChangeIndex = async (index: any) => {
    console.log(index);
    const size = listVideo.length;
    if (index >= size - 2) {
      getListVideo();
    }

  };

  return (
    <>
      {listVideo?.length > 0 && (
        <Swiper
          showsButtons={false}
          style={[styles.swiper]}
          horizontal={false}
          dotColor="#fff"
          removeClippedSubviews={false}
          showsPagination={true}
          loop={false}
          loadMinimal={true}
          loadMinimalSize={0}
          // showsHorizontalScrollIndicator={true}
          //   autoplay={true}
          //   autoplayTimeout={4}
          onIndexChanged={handleOnChangeIndex}

        >
          {listVideo?.map((item: any, index: number) => (
            <View key={item.id + index} style={styles.ShortVideoScreen_video}>
              <Video
                // source={require('../../assets/videos/videoTest.mp4')}
                // source={{ uri: 'https://tranvanthoai.online/video/video1.mp4' }}
                source={{
                  uri: `https://drive.google.com/uc?export=view&id=${item.idDriveVideo}`,
                }}
                style={styles.ShortVideoScreen_video_vd}
                resizeMode="contain"
                // repeat={true}
                muted={false}
                paused={blurScreen}
                poster={item.urlImage}


              />
            </View>
          ))}
          {/* <View style={styles.ShortVideoScreen_video}>
        <Video
          // source={require('../../assets/videos/videoTest.mp4')}
          source={{ uri: `https://drive.google.com/uc?export=download&id=1YKY5LdSJyVzqG6g35jLyuGy7DSyhmo7r` }}
          style={styles.ShortVideoScreen_video_vd}
          resizeMode="contain"
          repeat={true}
          muted={true}
          paused={false}
          onBuffer={() => console.log('cache')} // Callback when remote video is buffering
          onError={err => console.log(err)}
          controls
          minLoadRetryCount={2}
        />
      </View>
      <View style={styles.ShortVideoScreen_video}>
        <Video
          source={require('../../assets/videos/videoTest.mp4')}
          // source={{ uri: `https://drive.google.com/uc?export=download&id=${item.idDriveVideo}` }}
          style={styles.ShortVideoScreen_video_vd}
          resizeMode="contain"
          repeat={true}
          muted={true}
          paused={false}
        />
      </View>
      <View style={styles.ShortVideoScreen_video}>
        <Video
          source={require('../../assets/videos/videoTest.mp4')}
          // source={{ uri: `https://drive.google.com/uc?export=download&id=${item.idDriveVideo}` }}
          style={styles.ShortVideoScreen_video_vd}
          resizeMode="contain"
          repeat={true}
          muted={true}
          paused={false}
        />
      </View>
      <View style={styles.ShortVideoScreen_video}>
        <Video
          source={require('../../assets/videos/videoTest.mp4')}
          // source={{ uri: `https://drive.google.com/uc?export=download&id=${item.idDriveVideo}` }}
          style={styles.ShortVideoScreen_video_vd}
          resizeMode="contain"
          repeat={true}
          muted={true}
          paused={false}
        />
      </View> */}
        </Swiper>
      )}
    </>
  );
};

export default ShortVideoScreen;
