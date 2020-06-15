type TPageConfig = {
  title?: string;
  barColor?: string;
};

/**
 * 创建跨平台页面配置
 */
export const pageConfig = ({ title, barColor }: TPageConfig) => {
  const wechat = {
    navigationBarBackgroundColor: barColor,
    navigationBarTitleText: title,
  };

  const ali = {
    defaultTitle: title,
    titleBarColor: barColor,
  };

  const toutiao = {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: barColor,
  };

  const web = {
    title,
  };

  return { wechat, ali, toutiao, web };
};
