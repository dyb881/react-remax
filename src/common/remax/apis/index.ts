import { setNavigationBarTitle, getSystemInfoSync, makePhoneCall } from 'remax/wechat';

export const setTitle = (title: string) => setNavigationBarTitle({ title });

export const getPageInfo = () => {
  const { windowWidth } = getSystemInfoSync();
  return {
    width: windowWidth,
  };
};

export { getUpdateManager } from 'remax/wechat';

export const call = (phoneNumber: string) => {
  makePhoneCall({ phoneNumber });
};
