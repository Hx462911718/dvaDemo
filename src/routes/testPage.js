import { connect } from 'dva';
import Menua from '../components/menu/menu';
import Detail from '../components/layout/detail';
import {BrowserRouter as Router, Switch,Route ,Redirect} from 'react-router-dom';
import Test1 from '../components/menu/test1';
import Test2 from '../components/menu/test2';


const TestPage = ()=>{

    return (
        <div>
            <h3>事件编号：20180508060151911</h3>
            
            <Router>
            <Detail>
                <Switch>
                    <Route path="/test1" exact  component={Test1}/>
                    <Route path="/test2" exact  component={Test2}/>
                    <Redirect path="/" to={{pathname: '/test1'}} />
                </Switch>
              </Detail>
            </Router>
        </div>
    );
};

export default connect()(TestPage);