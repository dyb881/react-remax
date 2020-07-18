# react-remax

基于 remaxjs + Typescript 进行业务配置，兼容 web 和 三端(微信/阿里/头条)小程序

## 配置或封装的功能（跨平台使用）

- Less 默认配置
- 在 web 端可使用 antd-mobile，已配置按需加载
- 请求器
- Mobx 状态管理
- taost / alert / confirm / 走马灯 常用交互反馈函数
- rc-field-form 表单封装

## src 目录结构

- apis - 所有接口统一在此封装
- common - 公用功能
  - form - 表单封装
  - remax - remax 跨平台组件或 api
  - stores - 状态初始化，状态关联函数和状态关联装饰器生成（主状态下有多个子状态，主状态的构造函数执行状态初始化）
  - tool - 常用工具
- components - 业务组件封装（指会被多次使用或独立于页面外的组件，页面独有组件建议在页面文件夹内开发）
- pages - 页面
- app.ts - 页面入口
