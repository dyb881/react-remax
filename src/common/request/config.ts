import { TCreateRequestConfig } from './create';

// ------------------------------- 请求器配置 --------------------------------- //

/**
 * 生产地址
 */
export let host = 'http://localhost';

/**
 * 请求参数配置
 */
export const requestConfig: TCreateRequestConfig = {
  host, // API 地址
  apiPath: '/api', // API 目录
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
