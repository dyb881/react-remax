import React from 'react';
import { observable, when } from 'mobx';

const user = observable({
  isLogin: false,
  onLogin: (bind: boolean | (() => void)) => {
    if (typeof bind === 'boolean') user.isLogin = bind;
    else when(() => user.isLogin, bind);
  },
});

export default user;
