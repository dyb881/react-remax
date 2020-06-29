import React from 'react';
import { Carousel as CarouselSource } from 'antd-mobile';
import { TCarousel } from './types';

export const Carousel: TCarousel = (props) => {
  return <CarouselSource dots={false} {...props} />;
};
