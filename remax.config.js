const less = require('@remax/plugin-less');

module.exports = {
  one: true,
  output: 'build/' + process.env.REMAX_PLATFORM,
  plugins: [
    less({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          'rr-p': '#1890ff', // 全局主色
          'rr-s': '#52c41a', // 成功色
          'rr-w': '#faad14', // 警告色
          'rr-e': '#f5222d', // 错误色
          'rr-fs': '16px', // 主字号
          'rr-c': 'rgba(0, 0, 0, 0.85)', // 主文本色
          'rr-cs': 'rgba(0, 0, 0, .45)', // 次文本色
          'rr-dc': 'rgba(0, 0, 0, .25)', // 失效色
          'rr-dcb': 'rgba(0, 0, 0, .05)', // 失效背景色
          'rr-bc': '#eee', // 边框色
          'rr-bcd': '#ccc', // 边框色-深色
          'rr-b': '#fff', // 背景色
        },
      },
    }),
  ],
};
