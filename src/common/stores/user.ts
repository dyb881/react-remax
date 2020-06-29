import { observable, when } from 'mobx';

/**
 * 用户
 */
const store = observable({
  isLogin: false,
  onLogin: (bind: boolean | (() => void)) => {
    if (typeof bind === 'boolean') {
      store.isLogin = bind;
    } else {
      return when(() => store.isLogin, bind);
    }
  },
});

export default store;
