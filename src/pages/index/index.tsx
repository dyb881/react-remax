import React from 'react';
import { View, Image } from 'remax/one';
import { img } from '@/common';
import styles from './index.less';

export default () => {
  return (
    <View className={styles.page}>
      <Image src={img('icon.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
};
