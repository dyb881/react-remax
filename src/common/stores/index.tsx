import React from 'react';
import { observer } from 'mobx-react';
import user from './user';
import view from './view';

/**
 * 全局状态
 */
export const stores = { user, view };

/**
 * 状态类型
 */
export type TStores = { stores: typeof stores; [key: string]: any };

/**
 * 状态联合到组件（函数组件）
 * 使用后状态变更时会刷新两次组件，build 后就不会有这情况了，可放心开发
 */
export const combine = <P extends object>(Component: React.FC<P & TStores>) => {
  // 生成观察者组件
  const Observer = observer(Component);
  // 注入全局状态
  const Combine: React.FC<P> = props => <Observer {...props} stores={stores} />;
  return Combine;
};
