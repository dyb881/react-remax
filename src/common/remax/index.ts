import {
  navigateTo as navigateToSource, // 跳转
  redirectTo as redirectToSource, // 重定向
  reLaunch as reLaunchSource, // 关闭所有并打开新页面
  switchTab as switchTabSource, // 跳转 tab 页面
} from 'remax/one';

export const navigateTo = (url: string) => navigateToSource({ url });
export const redirectTo = (url: string) => redirectToSource({ url });
export const reLaunch = (url: string) => reLaunchSource({ url });
export const switchTab = (url: string) => switchTabSource({ url });

export {
  // API
  navigateBack, // 返回
  // 组件
  Button,
  View,
  Text,
  Image,
  Form,
  Label,
  Input,
  Textarea,
  WebView,
} from 'remax/one';

export {
  useAppEvent, // APP生命周期
  usePageEvent, // 页面生命周期
  createHostComponent, // 注册基础组件
  requirePlugin, // 引入插件方法
  requirePluginComponent, // 引入插件组件
} from 'remax/macro';

export {
  useQuery, // 获取页面参数
  usePageInstance, // 获取当前页面组件实例子
  useNativeEffect, // 小程序渲染完成
} from 'remax';
