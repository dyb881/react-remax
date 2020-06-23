import React from 'react';
import { useNativeEffect } from 'remax';
import { View } from 'remax/one';
import { confirm, alert } from '@/common';
import styles from './index.less';

export default () => {
  useNativeEffect(() => {
    confirm('警告弹窗', '这是一段测试文本').then((res) => alert('', `点击了${res ? '确定' : '取消'}`));
  });

  return <View className={styles.app}>react-remax</View>;
};
