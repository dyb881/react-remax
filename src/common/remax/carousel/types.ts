import React from 'react';

type TCarouselProps = {
  vertical?: boolean; // 垂直显示
  autoplay?: boolean; // 是否自动切换
  autoplayInterval?: number; // 自动切换的时间间隔
  infinite?: boolean; // 是否循环播放
  selectedIndex?: number; // 手动设置当前显示的索引
  afterChange?: (index: number) => void; // 切换面板后的回调函数
  slideWidth?: number; // 手动设置项目宽度
  [key: string]: any;
};

export type TCarousel = React.FC<TCarouselProps>;
