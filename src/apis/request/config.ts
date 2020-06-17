import { TFetchRequestConfig, TConfig } from '@dyb881/fetch-request';
import { requestFunction } from './function';
import { toast } from '@/common';

/**
 * 是否生产环境
 */
export const isProduction =
  process.env.REMAX_PLATFORM === 'web' ? window.location.protocol === 'https:' : process.env.NODE_ENV === 'production';

// ------------------------------- 请求器配置 --------------------------------- //

/**
 * 生产地址
 */
export let host = 'http://localhost';

/**
 * 测试地址
 */
const hostTest = 'http://localhost';

/**
 * 会根据 isProduction 自行变动，需要配置对应的生产和测试地址
 */
if (!isProduction) {
  host = hostTest;
}

/**
 * 请求参数配置
 */
export const requestConfig: TFetchRequestConfig = {
  host, // API 地址
  apiPath: '/api', // API 目录
  interceptorsRequest: (config) => {
    return config;
  },
  interceptorsResponse: (res, config) => {
    res.ok || config.noToast || toast.info(res.errorText);
    return res;
  },
  requestFunction,
};

// ------------------------------- 响应处理配置 --------------------------------- //

/**
 * 状态码 key
 * 返回结果中，用于匹配状态码的 key
 */
export const statusCodeKeys = ['status', 'code'];

/**
 * 成功状态码
 * 决定请求器响应结果 res.ok:boolean 返回的值
 */
export const successCodes = [0, '0', 200, 201, '0000', '1000', 1000, 1001, 1002, 1003, 1004, 1005, 2000, 80000];

/**
 * 错误信息字段
 */
export const messageKeys = ['msg', 'message', 'Message'];
