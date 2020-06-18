import React from 'react';
import { View, useNativeEffect, confirm, alert } from '@/common';
import styles from './index.css';

export default () => {
  useNativeEffect(() => {
    confirm('警告弹窗', '这是一段测试文本').then((res) => alert('', `点击了${res ? '确定' : '取消'}`));
  });

  return <View className={styles.app}>react-remax</View>;
};
