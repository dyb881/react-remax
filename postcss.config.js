if (process.env.REMAX_PLATFORM === 'web') {
  module.exports = ({ options }) => {
    const plugins = {};
    Object.keys(options.plugins).forEach((i) => {
      if (!/postcss-px2units/.test(i)) {
        plugins[i] = options.plugins[i];
      }
    });

    return {
      plugins: {
        ...plugins,
        'postcss-plugin-px2rem': {
          rootValue: 100,
          exclude: /(node_module)/,
        },
      },
    };
  };
} else {
  module.exports = ({ options }) => {
    return {
      plugins: {
        ...options.plugins,
      },
    };
  };
}
