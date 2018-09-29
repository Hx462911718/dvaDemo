import React from 'react';
import Menua from "../menu/menu";
import Head from "../head/head";


class Detail extends React.Component{

 
    constructor(props){
        super(props);
    }
    render(){
    const styles = {
        width: '200px'        
     }
    

        return (
            <div >
                <Head/>
                <Menua style={styles}/>
                {this.props.children}
            </div>

        );
    }

}
export default Detail;