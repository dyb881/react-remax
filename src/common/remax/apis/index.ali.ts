import { setNavigationBar, getSystemInfoSync } from 'remax/ali';

export const setTitle = (title: string) => setNavigationBar({ title });

export const getPageInfo = () => {
  const { screenWidth } = getSystemInfoSync();
  return {
    width: screenWidth,
  };
};

export { getUpdateManager } from 'remax/ali';
