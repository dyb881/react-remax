# react-remax

基于 remaxjs 进行封装，用最少代码实现跨平台封装

## src 目录结构

开发项目过程中，一般只会在 src 文件夹下进行开发（未说明的文件一般情况下无需理会）

- apis - 所有接口统一在此封装
- common - 公用功能
  - remax - remaxjs 跨平台导出
  - request - 请求器初始化生成
  - stores - 状态初始化，状态关联函数和状态关联装饰器生成（主状态下有多个子状态，主状态的构造函数执行状态初始化）
- components - 业务组件封装（指会被多次使用或独立于页面外的组件，页面独有组件建议在页面文件夹内开发）
- images - 项目存放图片的地方
- pages - 页面
- utils - 自定义工具和第三方 sdk 集合
- app.config.js - 路由和全局配置
- app.css - 全局样式
- app.ts - 入口

