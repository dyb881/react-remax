const title = '青牛';
const backgroundColor = '#282c34';
const pages = ['pages/index/index'];

exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: backgroundColor,
  },
};

exports.alipay = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: backgroundColor,
  },
};

exports.toutiao = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: backgroundColor,
  },
};
