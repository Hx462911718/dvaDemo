import React,{ Component } from 'react';
import { Modal,Form,Input } from 'antd';

class UserModal extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        };
    }

    
    render(){
        const { children,form:{ getFieldDecorator },record,ok }=this.props;

        const showModal=()=>{

            this.setState({
                visible:true
            });
        };
        const hideModal=()=>{

            this.setState({
                visible:false
            });
        };
        const save=()=>{

            this.props.form.validateFields((err,val)=>{
                //val ==> record

                // console.log(val);
                ok(val);
                hideModal();
            });
        };

        return (
            <div>
                <span onClick={ showModal }>
                    { children }
                </span>
                <Modal
                    title="Create User"
                    visible={ this.state.visible }
                    onCancel={ hideModal }
                    onOk={ save }>
                    <Form>
                        <Form.Item label="Name">
                            {
                                getFieldDecorator('name', {
                                    initialValue: record.name
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('age',{
                                    initialValue:record.age
                                })(<Input />)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    };
}

//的作用是创建一个高阶组件，为页面组件 userModal提供表单所需要的内容(this.props.form)。
export default Form.create()(UserModal);