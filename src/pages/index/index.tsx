import React from 'react';
import { View, Text, Image, combine, Button } from '@/common';
import styles from './index.module.less';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>开始
        </View>
        <View>状态管理</View>
        <Add />
        <Num />
      </View>
    </View>
  );
};

const Add = combine(({ stores }) => {
  return <Button onClick={stores.view.add}>add</Button>;
});

const Num = combine(({ stores }) => {
  return <View>{stores.view.num}</View>;
});
