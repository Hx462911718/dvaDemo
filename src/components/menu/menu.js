import { Menu, Icon, Switch } from 'antd';
import { connect } from 'dva';
import { Router, Route, Link, NavLink } from 'dva/router';
import React from 'react';


class Menua extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mode = 'inline';
    const theme = 'light';
    const styles = {
      width: '200px',
      float: 'left',
   }
    return (

      <div style={styles} >
      
        {/* <span className="ant-divider" style={{ margin: '0 1em' }} />
        <br />
        <br /> */}
        <Menu
          style={{ width: 200, height: 400 }}
          defaultSelectedKeys={['1']}
          mode={mode}
          theme={theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            <span>基本信息</span>
            <Link to="/test1">
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            附件
            <Link to ="/test2"/>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="mail" />
          处理流程
              </Menu.Item>
          <Menu.Item key="4">
            <Icon type="calendar" />
          关联工单
              </Menu.Item>
              <Menu.Item key="5">
            <Icon type="calendar" />
         其他记录
              </Menu.Item>
        </Menu>
      </div>
    );
  }
}



export default connect()(Menua);

