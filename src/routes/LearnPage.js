import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import styles from './IndexPage.css';
import { Row, Col } from 'antd';
import Sliders from "../components/dmenu/tmenu";
import CustomBreadcrumb from '../components/breadcrumb';

import Head from "../components/head/head";
class TM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: '1'

    }
  }

  changeMenuKeys(key){
    this.setState({
      currentKey : key
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
      <Row style={{ width: '100%', margin: '0' }}>
        <Col span={22} >
          {/* <CustomBreadcrumb data={this.props.common.breadcrumb} /> */}
          <Head  changeCurrentKey={(key) => {this.changeMenuKeys(key)}}/>
        </Col>
        <Col span={5} style={{ marginTop: '30px' }} ><Sliders   changeProps={(key) => {this.changeMenuKeys(key)}}  currentKey={this.state.currentKey} /></Col>
        <Col span={17} style={{ marginTop: '30px' }}>
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
        </Col>
      </Row>
    )
  }
}
// export default TM;
export default connect(({ common }) => ({ common }))(TM);