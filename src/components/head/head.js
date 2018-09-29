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
            // <div>
            // <h3>事件编号：<span>2018092914140023</span></h3>
            // <div className={styles.procedure}>
            //     <h4>流转环节：</h4>
            //     <ul className={styles.ul} >
            //         <li >
            //             {/* <p className="t1">&nbsp;</p>
            //             <div className="pop_attach">
            //                 <div className="gep" >
            //                 </div>
            //             </div> */}
            //             {/* <p className="t3">草稿</p> */}
            //             <p className={styles.t1}>&nbsp;</p>
            //             <div className={styles.attach}>
            //                 <Link to="/detail/test3"   >
            //                     <div className={styles.gep}  onClick={(e) => this.changeKey(e)} >

            //                     </div>
            //                 </Link>
            //             </div>
            //             <p className={styles.t3}>草稿</p>
            //         </li>
            //     </ul>
            // </div>
            // </div>


            <div className={styles.header}>
                <div className={styles.eventNo}>
                    <span><b>事件编号：20180508060151911</b></span>
                </div>
                <div className={styles.header_content}>
                    <span className={styles.huanjie}>流转环节：</span>
                    <ul>
                        <li className={styles.item}>
                            <div className={styles.itemDiv}>
                                <div className={styles.line}></div>
                                <div className={styles.point} onClick={() => this.toProcress()}></div>
                                <div className={styles.text}>流程1</div>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.itemDiv}>
                                <div className={styles.line}></div>
                                <div className={styles.point} onClick={() => this.toProcress()}></div>
                                <div className={styles.text}>流程2</div>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.itemDiv}>
                                <div className={styles.line}></div>
                                <div className={styles.point} onClick={() => this.toProcress()}></div>
                                <div className={styles.text}>流程3</div>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.itemDiv}>
                                <div className={styles.line}></div>
                                <div className={styles.point} onClick={() => this.toProcress()}></div>
                                <div className={styles.text}>流程4</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        );
    }
}

export default connect()(Head);