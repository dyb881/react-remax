import React, { useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { Carousel as CarouselSource } from 'antd-mobile';
import { TCarousel } from './types';

export const Carousel: TCarousel = (props) => {
  const [key, setKey] = useState(0);

  // 页面跳转会导致消失
  usePageEvent('onShow', () => {
    setKey(key + 1);
  });

  return <CarouselSource key={key} dots={false} {...props} />;
};
