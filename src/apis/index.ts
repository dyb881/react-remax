import { post } from './request';
export * from './request/config';

export const user = {
  login: () => post('/login', {}, '登录'),
};
