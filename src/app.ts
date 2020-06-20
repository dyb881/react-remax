import React from 'react';
import { useAppEvent } from 'remax/macro';
import { getUpdateManager, confirm } from './common';
import './app.less';

const App: React.FC<any> = ({ children }) => {
  useAppEvent('onLaunch', async () => {
    if (getUpdateManager) {
      // 版本监听更新
      const updateManager = getUpdateManager();
      updateManager.onUpdateReady(async () => {
        const res = await confirm('更新提示', '新版本已经准备好，是否重启应用？');
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        res && updateManager.applyUpdate();
      });
    }
  });

  return children;
};

export default App;
