/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar({translucent =true, backgroundColor = 'transparent',...props}) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} backgroundColor={backgroundColor} translucent={translucent}/> : null;
}

export default FocusAwareStatusBar;
