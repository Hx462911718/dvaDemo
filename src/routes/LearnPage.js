import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import styles from './IndexPage.css';
import { Row, Col, Layout } from 'antd';
import Sliders from "../components/dmenu/tmenu";
import CustomBreadcrumb from '../components/breadcrumb';

import Head from "../components/head/head";
import layout from 'antd/lib/layout/layout';
const { Header, Content, Footer, Sider } = Layout;
class TM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: '1'

    }
  }

  changeMenuKeys(key) {
    this.setState({
      currentKey: key
    });
  }
  render() {
    console.log("----------------");
    console.log(this.props);

    const breadcrumbData = [
      {
        name: '首页',
        path: '/detail'
      }, {
        name: '菜单21',
        path: '/21'
      }
    ];
    const { getRouteData } = this.props;
    // console.log(getRouteData);
    // {
    //   getRouteData('BasicLayout').map(item =>(

    //     console.log(item.path)
    //   )

    //   )
    // }

    return (

      <Layout>
        <Header style={{ background: '#fff', height: '150px', padding :'0'}}>
          <Head style={{marginTop:"-3.1px"}} changeCurrentKey={(key) => { this.changeMenuKeys(key) }} />
        </Header>
        <Layout >
          <Sider style={{ background: '#fff' }}>
            <Sliders changeProps={(key) => { this.changeMenuKeys(key) }} currentKey={this.state.currentKey} />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, marginTop: 10, minHeight: 380 }}>
              <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
                      <Route
                        exact={item.exact}
                        key={item.path}
                        path={'/detail' + item.path}
                        component={item.component}
                      />
                    )
                  )
                }
                <Redirect exact from="/detail" to="/detail/test1" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
// export default TM;
export default connect(({ common }) => ({ common }))(TM);