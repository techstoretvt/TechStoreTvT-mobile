/* eslint-disable prettier/prettier */
// import { View, Text } from 'react-native';
import React from 'react';
import { Badge } from '@rneui/themed';

const MarkUpdate = () => {
  return (
    <Badge
      status="success"
      containerStyle={{ position: 'absolute', top: -6, right: 0 }}
      value={'Đang cập nhật'}
      badgeStyle={{ backgroundColor: '#000', borderWidth: 1, borderColor: 'blue' }}
      textStyle={{ color: '#fff' }}
    />
  );
};

export default MarkUpdate;
