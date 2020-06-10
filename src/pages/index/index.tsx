import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image src="images/icon.png" className={styles.logo} />
        <View className={styles.text}>react-remax</View>
      </View>
    </View>
  );
};
