import React from 'react';
import { observable } from 'mobx';

const view = observable({
  num: 0,
  add: () => {
    view.num++;
  },
});

export default view;
