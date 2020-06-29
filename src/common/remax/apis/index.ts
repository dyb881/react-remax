import { setNavigationBarTitle, getSystemInfoSync } from 'remax/wechat';

export const setTitle = (title: string) => setNavigationBarTitle({ title });

export const getPageInfo = () => {
  const { screenWidth } = getSystemInfoSync();
  return {
    width: screenWidth,
  };
};

export { getUpdateManager } from 'remax/wechat';
