import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from 'remax/web';

const title = 'react-remax';
const barColor = '#282c34';
const pages = ['pages/index/index'];

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: barColor,
    navigationBarTitleText: title,
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: barColor,
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: barColor,
  },
};

export const web: WebAppConfig = {
  pages,
  title,
};
