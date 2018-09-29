import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic'
import cloneDeep from 'lodash/cloneDeep';
import { getNavData } from './common/nav';
import { getPlainNode } from './utils/utils';




//获取路由数据
function getRouteData(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(route.children);
  return nodeList;
}

//动态初始化组件
function getLayout(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null;
  }
  const route = navData.filter(item => item.layout === path)[0];
  return {
    component: route.component,
    layout: route.layout,
    name: route.name,
    path: route.path,
  };
}

function RouterConfig({ history ,app}) {

  const navData = getNavData(app);
  const BasicLayout = getLayout(navData, 'BasicLayout').component;
  const passProps = {
    app,
    navData: navData.filter((item) => {
      return item.layout !== 'UserLayout';
    }), // 剔除掉无需登录模块
    getRouteData: (path) => {
      return getRouteData(navData, path);
    },
  };
  // const UserPage = dynamic({
  //     app,
  //   //注册model
  //   models:()=>[
  //     import('./models/user')
  //   ],
      
  //     //动态加载组件
  //     component:()=>import('./routes/userPage'),
  // });

  // const TestPage = dynamic({
  //   app,
  //   //注册model
  //   //动态加载组件
  //   component:()=>import('./routes/testPage'),
  // });

  // const LearnPage = dynamic({
  //     app,
  //     models:()=>[
  //     import('./models/common')
  //   ],
  //   component:()=>import('./routes/LearnPage'),
  // });

  

  return (


    <LocaleProvider locale={zhCN}>
    <Router history={history}>
      <Switch>
        {/* <Route path="/user" render={props => <UserLayout {...props} {...passProps} />} /> */}
        <Route path="/detail" render={props => <BasicLayout {...props} {...passProps}/>} />
        <Redirect exact from="/detail" to="/detail/test1" />
      </Switch>
    </Router>
  </LocaleProvider>
  );
}

export default RouterConfig;
