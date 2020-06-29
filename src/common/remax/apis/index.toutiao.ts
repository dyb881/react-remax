import { setNavigationBarTitle, getSystemInfoSync } from 'remax/toutiao';

export const setTitle = (title: string) => setNavigationBarTitle({ title });

export const getPageInfo = () => {
  const { screenWidth } = getSystemInfoSync();
  return {
    width: screenWidth,
  };
};

export { getUpdateManager } from 'remax/toutiao';
