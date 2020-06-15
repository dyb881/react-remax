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
