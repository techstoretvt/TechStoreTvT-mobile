/* eslint-disable prettier/prettier */

import { Animated, Image, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './verify_register_screen_styles';
import { verifyCreateUser } from '../../services/api';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }: { hasValue: any; index: any; isFocused: any }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.timing(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: 300,
    }),
  ]).start();
};

const VerifyRegister = ({ route, navigation }: { route: any; navigation: any }) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }: { index: any; symbol: any; isFocused: any }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText key={index} style={[styles.cell, animatedCellStyle]} onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  const handleSubmid = async () => {
    console.log(value, route.params.email);
    if (value.length !== 6) {
      return;
    }
    if (!route.params.email) {
      console.log('vao');

      Alert.alert('Cảnh báo', 'Có lỗi xảy ra vui lòng thử lại sau!');
      return;
    }
    let data = {
      email: route.params.email,
      code: value,
    };
    let res = await verifyCreateUser(data);
    console.log('verify', res);
    if (res?.errCode === 0) {
      console.log('verify success');
      navigation.navigate('Login');
    } else {
      Alert.alert('Cảnh báo', res?.errMessage || 'Có lỗi xảy ra vui lòng thử lại sau');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we send to your email address
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleSubmid}>
        <Text style={styles.nextButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyRegister;
