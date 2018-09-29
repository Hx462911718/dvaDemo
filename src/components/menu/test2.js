import React,{ Component } from 'react';
import { connect } from 'dva';



class Test2 extends React.Component{


    render(){

        return (
            <div>
                
                <span>hello  Test2</span> 
            </div>


        );

    }
    


}

export default connect()(Test2);