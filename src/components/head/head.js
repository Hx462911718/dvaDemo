import React from 'react';
import { connect } from 'dva';
import styles from "./head.css";
import { Link } from 'dva/router';




class Head extends React.Component {

    constructor(props) {
        super(props);
    }

    changeKey() {
        this.props.changeCurrentKey("3");
    }


    render() {

        return (
            // onclick="clickFlowNode('draft')"
            <div>
            <h3>事件编号：<span>2018092914140023</span></h3>
            <div className={styles.procedure}>
                <h4>流转环节：</h4>
                <ul className={styles.ul} >
                    <li >
                        {/* <p className="t1">&nbsp;</p>
                        <div className="pop_attach">
                            <div className="gep" >
                            </div>
                        </div> */}
                        {/* <p className="t3">草稿</p> */}
                        <p className={styles.t1}>&nbsp;</p>
                        <div className={styles.attach}>
                            <Link to="/detail/test3"   >
                                <div className={styles.gep}  onClick={(e) => this.changeKey(e)} >

                                </div>
                            </Link>
                        </div>
                        <p className={styles.t3}>草稿</p>
                    </li>
                </ul>
            </div>
            </div>

        );

    }

}

export default connect()(Head);