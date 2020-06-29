import React from 'react';

/**
 * 判断是否有效 react 组件
 */
export const isElement = (e: any): e is JSX.Element => {
  return React.isValidElement(e);
};

/**
 * 仿 class state 的 hooks
 * 新状态会合并到原状态
 */
export const useStates = <T extends object>(defaultStates: T) => {
  const reducer = (states: T, newStates: Partial<T> & { [key: string]: any }) => ({ ...states, ...newStates });
  const [states, setStates] = React.useReducer(reducer, defaultStates);
  return { states, setStates };
};

let imagesPath = 'images/';

if (process.env.REMAX_PLATFORM !== 'web') imagesPath = `/${imagesPath}`;

/**
 * 引用图片
 */
export const img = (fileName: string) => {
  return imagesPath + fileName;
};

/**
 * 正则
 */
export const regular = {
  /**
   * 车牌号
   */
  carNumber: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/,

  /**
   * 手机号
   */
  phone: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,

  /**
   * 身份证
   */
  idCard: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,

  /**
   * 中文姓名
   */
  chineseName: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
};
