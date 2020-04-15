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
  Textarea,
  Picker,
  PickerView,
  PickerViewColumn,
  ScrollView,
  Icon,
  Switch,
  // 基础
  getUpdateManager,
  getSystemInfo,
  hideHomeButton,
  // 网络
  request,
  uploadFile,
  // 数据缓存
  setStorage,
  getStorage,
  // 路由
  switchTab,
  reLaunch,
  navigateTo,
  redirectTo,
  setNavigationBarTitle,
  navigateBack,
  // 媒体
  previewImage,
  chooseImage,
  // 界面
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showModal,
  // 文件
  getFileSystemManager,
  // 开放接口
  login,
  requestPayment,
  // 设备
  makePhoneCall,
  setClipboardData,
  // hooks
  useAppEvent,
  usePageEvent,
  useQuery,
  //消息订阅
  requestSubscribeMessage,
} = currentRemax;

export const toast = (title: string, duration = 1000) => {
  return showToast({ title, duration, icon: 'none' });
};

export const loading = (title = '') => {
  showLoading({ title });
};
