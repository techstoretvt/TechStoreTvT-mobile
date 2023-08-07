/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { LinearProgress } from '@rneui/themed';

import styles from './start-screen_styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';
import { checkStartServerService } from '../../services/api';

interface StartScreen {
  navigation: any;
}

const StartScreen = ({ navigation }: StartScreen) => {
  const [progess, setProgess] = React.useState(0);

  React.useEffect(() => {
    if (progess < 0.85) {
      setTimeout(() => {
        setProgess(prev => {
          return +(prev + 0.1).toFixed(1);
        });
      }, 500);
    }
  }, [progess]);

  React.useEffect(() => {
    checkStartServerService()
      .then(res => {
        console.log(res);
        if (res?.errCode === 0) {
          setTimeout(() => {
            setProgess(1);
            setTimeout(() => {
              navigation.navigate('HomeStack', { screen: 'Home' });
            }, 0);
          }, 1000);
        }
      })
      .catch(error => {
        console.log('error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indexImage = React.useMemo(() => {
    let num = Math.floor(Math.random() * 20) + 1;
    console.log('Image: ', num);
    return num;
  }, []);

  return (
    <View style={styles.startScreen_container}>
      <FocusAwareStatusBar />
      <ImageBackground
        source={{ uri: `https://source.unsplash.com/random?sig=${indexImage}` }}
        style={styles.startScreen_container_wrapImage}
      >
        <View style={styles.startScreen_container_wrapImage_wrapLogo}>
          <Image
            style={styles.startScreen_container_wrapImage_logo}
            source={require('../../assets/images/Logo/logo.jpeg')}
          />
        </View>
      </ImageBackground>
      <View style={styles.startScreen_container_wrapProgessBar}>
        <Text style={styles.startScreen_container_wrapProgessBar_title}>Đang phát hiện mạng ...</Text>
        <View style={styles.startScreen_container_wrapProgessBar_wrapProgess}>
          <LinearProgress
            style={{ marginVertical: 10 }}
            value={progess}
            variant="determinate"
            color="red"
            trackColor="gray"
            animation={{ duration: 500 }}
          />
        </View>
        <Text style={styles.startScreen_container_wrapProgessBar_version}>v1.4.4</Text>
      </View>
    </View>
  );
};

export default StartScreen;
