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
        >
          {listVideo?.map((item: any, index: number) => (
            <View key={item.id + index} style={styles.ShortVideoScreen_video}>
              <Video
                // source={require('../../assets/videos/videoTest.mp4')}
                // source={{ uri: 'https://tranvanthoai.online/video/video1.mp4' }}
                source={{
                  uri: 'https://rr5---sn-npoe7ns7.c.drive.google.com/videoplayback?expire=1692539455&ei=D_DhZKW_F9zq-LYP2LyB0AY&ip=113.22.136.36&cp=QVROVEZfWFRTRlhPOlZxRW94VzZsRDk0dzdtb1BBWGpKdThiME1QMkhmYlRxUlMxWm1BMkh1QnY&id=914d65f267e5b5e8&itag=18&source=webdrive&requiressl=yes&mh=NV&mm=32&mn=sn-npoe7ns7&ms=su&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1pryIiNho0MXfPaaZZj7J8Zs__zGURYnh&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=8.939&lmt=1685607843103502&mt=1692528282&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIge_k7YNdf78w-alZs5krz5CmDi-OE3kFPyXslkZOAuscCIQDyt_wr8vzeS2xSELF1R1PWnx-zVVrbfR84J7SnXvnQzQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOXYFCOD8fbpkSHBBG3kyIp32HbP2eX_QBj6V2RUHj3MAiB7GLzF7lUk1D6Fjqh06ThV6OV400ChF7jWJbOHVj-fGg==&cpn=gJFWSySR_twUN6gV&c=WEB_EMBEDDED_PLAYER&cver=1.20230815.01.01',
                }}
                style={styles.ShortVideoScreen_video_vd}
                resizeMode="contain"
                // repeat={true}
                muted={true}
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
