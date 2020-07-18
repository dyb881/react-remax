import { setNavigationBar, getSystemInfoSync, makePhoneCall } from 'remax/ali';

export const setTitle = (title: string) => setNavigationBar({ title });

export const getPageInfo = () => {
  const { windowWidth } = getSystemInfoSync();
  return {
    width: windowWidth,
  };
};

export { getUpdateManager } from 'remax/ali';

export const call = (phoneNumber: string) => {
  makePhoneCall({ number: phoneNumber });
};
