import React from 'react';
import {connect} from 'dva';
import { exact } from 'prop-types';

class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>菜单一1</div>)
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/learns'
        },{
          name:'菜单一1'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
// //写法1
// function mapStateToProps({ common }) {
//   return {common};
// }
// export default connect(mapStateToProps)(Option);

//写法2
export default connect(({common})=>({common}))(Option);
