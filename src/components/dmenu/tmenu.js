import React from 'react';
import { Menu, Icon,Layout } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Sider } = Layout;

class Siders extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        current: '1'
    }
  }
  handleClick(e) {
    this.props.changeProps("1");
    this.setState({
      current: e.key,
    });
  }
  render() {
    const currents =(this.props.currentKey ==='1') ? this.state.current : this.props.currentKey;
    console.log("currennt");
    console.log(this.props.currentKey);
    return (
      <Sider>
      <Menu
        onClick={(e) =>{this.handleClick(e)}}
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        selectedKeys={[currents]}
        // defaultOpenKeys={['sub1']}
        theme="light"
        mode="inline"
      >
        <Menu.Item key="1">
          <Icon type="mail" />
            <span>基本信息</span>
          <Link to="/detail/test1">
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="calendar" />
            <span>附件</span>
          <Link to="/detail/form" >
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="mail" />
            <span>处理流程</span>
          <Link to="/detail/test3" >
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="calendar" />
            <span> 关联工单</span>
          <Link to="/detail/test4" >
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="calendar" />
            <span> 其他记录</span>
          <Link to="/detail/test5" >
          </Link>
        </Menu.Item>
      </Menu>
      </Sider>
    );
  }
}

export default Siders;
