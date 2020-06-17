import { post } from './request';

export const user = {
  login: () => post('/login', {}, '登录'),
};
