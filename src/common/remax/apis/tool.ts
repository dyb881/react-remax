import { getPageInfo } from './';

/**
 * 计算兼容尺寸
 */
export const getSize = (px: number) => {
  const { width } = getPageInfo();
  return (width / 750) * px;
};
