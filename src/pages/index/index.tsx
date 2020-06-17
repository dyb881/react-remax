import React from 'react';
import { View, Text, Image, Input, toast } from '@/common';
import styles from './index.css';

export default () => {
  React.useEffect(() => {
    toast.loading('test');
    setTimeout(() => {
      toast.info('test2', 10);
    }, 1000);
    setTimeout(() => {
      toast.hide();
    }, 3000);
  }, []);

  return <View className={styles.app}>react-remax</View>;
};
