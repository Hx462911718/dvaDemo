import { Table,Divider,Button,Popconfirm } from 'antd';
import React,{ Component } from 'react';
import { connect } from 'dva';
import UserModal from './create';

// const UserTable = ({ list,dispatch }) => {



//     const createUser=(user)=>{
//         dispatch({
//             type:'user/create',
//             payload:{
//                 user
//             }
//         });
//     };

  

//     }
//     const columns=[
//         {
//             title:'ID',
//             dataIndex:'id',
//             render: text => <a href="javascript:;">{text}</a>
//         },
//         {
//             title:'NAME',
//             dataIndex:'name'
//         },
//         {
//             title:'AGE',
//             dataIndex:'age'
//         },
//         {
//             title: '操作',
//             render: (text, record) => (
//               <span>
//                         <a href="javascript:;" onClick={() => onClickCheck(record)}>查看详情</a>
//                            <Divider type="vertical"/>
//                         <a href="javascript:;" onClick={() => onEditItem(record)}>编辑</a>
//                           <Divider type="vertical"/>
//                         <Popconfirm title="确定删除该事件么？删除后将不能恢复" onConfirm={() => onDeleteItem(record)} okText="确定" cancelText="取消">
//                            <a href="#">删除</a>
//                          </Popconfirm>
//                      </span>
//             )
//         }
//     ];
//     return (
//         <div>
//             <UserModal record={ {} } ok={ createUser }>
//                 <Button type="primary">NEW</Button>
//             </UserModal>
//             <Table
//                 columns={ columns }
//                 dataSource={ list }
//                 rowKey={ t=>t.id }
//                 pagination={ pagination }>
//                 {/* users datatable */}
//             </Table>
//         </div>
//     );
// };


// //获取model user中的数据到当前组件
// export default connect(({ user }) => {

//     console.log(user);
//     return {
//         list: user.list
//     };
// })(UserTable);




    class UserTable extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    //选择的复选框
                    selectedRowKeys: []
                }
               
            };

            
            //  createUser=(user)=>{
            //     this.props.dispatch({
            //         type:'user/create',
            //         payload:{
            //             user
            //         }
            //     });
            // };
            onSelectChange = (selectedRowKeys) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.setState({ selectedRowKeys });
              }

            render(){
                const {onClickCheck, onDeleteItem, onEditItem} = this.props;
                const pagination = {

                    pageSize: 4,
                    itemRender : (current, type, originalElement)=>{
                        if (type === 'prev') {
                            return <a>上一页</a>;
                          } if (type === 'next') {
                            return <a>下一页</a>;
                          }
                          return originalElement;
                    }
            
                }
                const columns=[
                    {
                        title: '序号',
                        dataIndex: 'number'
                      },
                    {
                        title:'ID',
                        dataIndex:'id',
                        render: text => <a href="javascript:;">{text}</a>
                    },
                    {
                        title:'NAME',
                        dataIndex:'name'
                    },
                    {
                        title:'AGE',
                        dataIndex:'age'
                    },
                    {
                        title: '操作',
                        render: (text, record) => (
                          <span>
                                    <a href="javascript:;" onClick={() => onClickCheck(record)}>查看详情</a>
                                    <Divider type="vertical"/> 
                                    <Popconfirm title="确定删除该事件么？删除后将不能恢复" onConfirm={() => onDeleteItem(record)} okText="确定" cancelText="取消">
                                       <a href="#">删除</a>
                                     </Popconfirm>
                                 </span>
                        )
                
                
                      },
                ];
                // console.log(this.props.dataSource.data);
                const { selectedRowKeys} = this.state;
                const rowSelection = {
                    selectedRowKeys,
                    onChange: this.onSelectChange,
                  };
              
                return (
                    <div style={{height:'300'}}>
                        {/* <UserModal record={ {} } ok={ this.createUser }>
                            <Button type="primary">NEW</Button>
                        </UserModal> */}

                        <Table
                            columns={ columns }
                            dataSource={ this.props.dataSource}
                            rowKey={ record=>record.id }
                            rowSelection={rowSelection}
                            pagination={pagination }>
                            {/* users datatable */}
                        </Table>
                    </div>
                );


            }
            

    }

    export default UserTable;