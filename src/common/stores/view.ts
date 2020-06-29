import { observable } from 'mobx';

/**
 * 视图
 */
const store = observable({
  tab: 0,
  setTab: (tab: number) => {
    store.tab = tab;
  },
});

export default store;
