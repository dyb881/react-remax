import { post } from './request';

const user = {
  login: () => post('/login', {}, '登录'),
};
