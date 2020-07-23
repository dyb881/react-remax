import React, { useEffect } from 'react';
import { useAppEvent } from 'remax/macro';
import { getUpdateManager, confirm } from './common';
import './app.less';

const App: React.FC<any> = ({ children }) => {
  if (process.env.REMAX_PLATFORM !== 'web') {
    useAppEvent('onLaunch', async () => {
      // 版本监听更新
      const updateManager = getUpdateManager();
      updateManager.onUpdateReady(async () => {
        const res = await confirm('更新提示', '新版本已经准备好，是否重启应用？');
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        res && updateManager.applyUpdate();
      });
    });

    useAppEvent('onShow', () => {
      // 执行登录流程
    });
  } else {
    useEffect(() => {
      // 执行登录流程
    }, []);
  }

  return children;
};

export default App;
