import { request } from '../remax';

/**
 * 默认请求配置
 */
export type TConfig = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; // 请求类型，部分后端只能识别大写
  responseType?: 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text'; // 响应数据类型
  // 请求头
  headers?: {
    Accept?: string; // 期望得到数据格式
    'Content-Type'?: string; // 传递参数格式
    [key: string]: any;
  };
  timeout?: number; // 请求超时
  url?: string; // 请求地址
  data?: any; // 请求元数据，转为主体前的数据
  label?: string; // 请求标签，一般用于请求日志标记
  [key: string]: any;
};

/**
 * 初始化配置
 */
export type TCreateRequestConfig = {
  defaultConfig?: TConfig; // 默认配置
  host?: string; // API地址
  apiPath?: string; // API目录
  interceptorsRequest?: (config: TConfig) => TConfig; // 请求拦截，可以返回拦截处理的配置
  interceptorsResponse?: (res: any, config: TConfig) => any; // 响应拦截，可以返回拦截处理的结果
};

/**
 * 如果配置为文本类型，直接写入 label
 */
const labelToConfig = (config?: TConfig | string) => {
  return typeof config === 'string' ? { label: config } : config;
};

/**
 * 统计时间
 */
const statisticalTime = () => {
  const start = new Date();
  return () => {
    const end = new Date();
    return { start: start.toTimeString(), end: end.toTimeString(), total: `${(+end - +start) / 1000}秒` };
  };
};

/**
 * 错误解析字段
 */
const erroText = {
  timeout: '网络连接超时',
  'Network Error': '请求地址错误或跨域未允许',
  'request:fail': '请求地址错误或跨域未允许',
};

/**
 * 异常分析 错误信息 => 错误解析文本
 */
const erroToText = (error: string): string => {
  for (const [key, item] of Object.entries(erroText)) {
    // 正则匹配得到错误文本
    if (new RegExp(key).test(error)) return item;
  }
  return '其他错误';
};

/**
 * 控制台打印颜色
 */
const consoleStyle = {
  request: 'color: #0089E5;',
  success: 'color: #2DB700;',
  fail: 'color: #F41900;',
};

/**
 * 打印日志
 * 请求配置的 请求标签 label 代表打印日志的 文本内容
 */
export const log = {
  request: (config: TConfig) => {
    console.groupCollapsed(`%cRequest: ${config.label || config.url} ⇅`, consoleStyle.request);
    console.log('请求类型：', config.method);
    console.log('请求地址：', config.url);
    console.log('请求数据：', config.data || '无');
    console.log('请求配置：', config);
    console.groupEnd();
  },
  response: (res: any, config: TConfig, success: boolean) => {
    let title = `%cResponse: ${config.label || config.url} ${success ? '√' : '×'}`;
    if (res?.time?.total) title += ` 用时：${res.time.total}`;
    console.groupCollapsed(title, consoleStyle[success ? 'success' : 'fail']);
    console.log('响应数据：', res);
    if (!success) {
      console.log('响应异常：', res.error || '无');
      console.log('异常解析：', res.errorText);
    }
    console.groupEnd();
  },
};

/**
 * 请求模型
 */
export default class CreateRequest {
  host = '';
  apiPath = '';
  defaultConfig: TConfig = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    timeout: 5000,
  };
  interceptorsRequest = (config: TConfig) => config;
  interceptorsResponse = (res: any, _config: TConfig) => res;

  constructor(config?: TCreateRequestConfig) {
    if (config) {
      const { defaultConfig, ...configs } = config;
      Object.assign(this.defaultConfig, defaultConfig);
      Object.assign(this, configs);
    }
  }

  /**
   * 基础路径
   */
  get baseURL() {
    return this.host + this.apiPath;
  }

  /**
   * 执行请求
   */
  request = (configs: TConfig) => {
    let { url = '', ...config } = configs;

    // 拼接地址
    if (!/^http/.test(url)) url = this.baseURL + url;

    // 请求拦截
    config = this.interceptorsRequest({ url, ...this.defaultConfig, ...config });

    // 开始统计时间
    const st = statisticalTime();

    // 处理结果
    return request(config as any)
      .catch((error: any) => {
        // 异常分析
        error = error?.errMsg || error;
        return { error, errorText: erroToText(error) };
      })
      .then((res: any) => this.interceptorsResponse({ time: st(), ...res }, config)); // 载入响应拦截
  };

  /**
   * 创建请求器
   */
  createRequest = (method: TConfig['method'], configs?: TConfig) => {
    return (url: string, data?: object, ...args: (TConfig | string)[]) => {
      return this.request(Object.assign({ method, url, data }, configs, ...args.map(i => labelToConfig(i))));
    };
  };

  get = this.createRequest('GET');
  post = this.createRequest('POST');
  put = this.createRequest('PUT');
  patch = this.createRequest('PATCH');
  del = this.createRequest('DELETE');
  upload = this.createRequest('POST', { headers: {} });
}
