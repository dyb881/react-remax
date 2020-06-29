import { useQuery as useQuerySource } from 'remax';
import qs from 'qs';

/**
 * 获取请求参数
 */
export const useQuery = () => {
  if (process.env.REMAX_PLATFORM !== 'web') return useQuerySource();
  return qs.parse(window.location.hash.split('?')[1]) as any;
};

// 兼容导出的 api，由于需要 API 的类型定义，所以默认使用微信导出，但是使用时均需要做非空判断
export * from './apis';
export * from './apis/tool';
export * from './interactive_feedback'; // 交互反馈
export * from './carousel'; // 轮播走马灯
