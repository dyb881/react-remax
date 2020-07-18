import { setNavigationBarTitle, getSystemInfoSync, makePhoneCall } from 'remax/toutiao';

export const setTitle = (title: string) => setNavigationBarTitle({ title });

export const getPageInfo = () => {
  const { windowWidth } = getSystemInfoSync();
  return {
    width: windowWidth,
  };
};

export { getUpdateManager } from 'remax/toutiao';

export const call = (phoneNumber: string) => {
  makePhoneCall({ phoneNumber: phoneNumber });
};
