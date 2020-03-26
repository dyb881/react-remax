import * as Wechat from 'remax/wechat';
// import * as Alipay from 'remax/alipay';
// import * as Toutiao from 'remax/toutiao';
import { Platform } from 'remax';

/**
 * 所有环境组件和API集合
 */
export const remax = {
  wechat: Wechat,
  // alipay: Alipay,
  // toutiao: Toutiao,
};

/**
 * 当前环境
 */
export const current = Platform.current as keyof typeof remax;

/**
 * 当前环境组件和API集合
 */
export const currentRemax = remax[current];

/**
 * 导出当前环境对应组件和API
 * 如果需要针对平台定制参数，可以在这里删掉对应导出，另外封装
 */
export const {
  // 组件
  View,
  Text,
  Image,
  Button,
  Input,
  // API
  request,
  uploadFile,
  navigateTo,
  setNavigationBarTitle,
  makePhoneCall,
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  previewImage,
} = currentRemax;
