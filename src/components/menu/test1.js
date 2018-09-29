import React,{ Component } from 'react';
import { Modal,Form,Input } from 'antd';
import UserTable from '../user/user';
import { connect } from 'dva';

class Test1 extends React.Component{


    render(){

        return (
            <div id="page-wrapper" style={{float: 'left',marginLeft: '50px',width : '75%',height: 400}}>
                <UserTable/>
            </div>
        );
    }

}

export default connect()(Test1);