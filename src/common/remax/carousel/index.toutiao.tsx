import React from 'react';
import { Swiper, SwiperItem } from 'remax/toutiao';
import { TCarousel } from './types';
import { getPageInfo } from '../apis';
import { getSize } from '../apis/tool';

export const Carousel: TCarousel = ({
  children,
  selectedIndex: current,
  autoplayInterval: interval,
  infinite: circular,
  afterChange,
  slideWidth = 1,
  ...props
}) => {
  const { width } = getPageInfo();
  const margin = getSize(width * (1 - slideWidth));

  return (
    <Swiper
      onAnimationFinish={(e) => afterChange?.(e.detail.current)}
      {...{ current, interval, circular, previousMargin: margin, nextMargin: margin, ...props }}
    >
      {React.Children.map(children, (i, key) => (
        <SwiperItem key={key}>{i}</SwiperItem>
      ))}
    </Swiper>
  );
};
