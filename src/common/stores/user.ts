import { observable, action, when } from 'mobx';

/**
 * 用户
 */
const store = observable({
  isLogin: false,
  onLogin: (bind: boolean | (() => void)) => {
    if (typeof bind === 'boolean') {
      this.isLogin = bind;
    } else {
      when(() => this.isLogin, bind);
    }
  },
});

export default store;
