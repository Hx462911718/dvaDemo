/**
 * 我们为了统一方便的管理路由和页面的关系，将配置信息统一抽离到 common/nav.js 下，同时应用动态路由
 */

import dynamic from 'dva/dynamic';

// dynamic包装 函数
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['common'], () => import('../routes/LearnPage')),
    layout: 'BasicLayout',
    name: '详情页',
    path: '/detail',
    children: [
      {
        name: '用户列表',
        icon: 'dashboard',
        path: 'test1',
        component: dynamicWrapper(app, ['user'], () => import('../routes/userPage')),
      },
      {
        name: '测试页',
        path: 'form',
        icon: 'form',
        component: dynamicWrapper(app, [], () => import('../routes/tt1')),
      },
    ],
  },
];
