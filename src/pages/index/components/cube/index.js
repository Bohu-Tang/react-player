import React,{Component} from "react";
import styles from './index.module.scss'

class Cube extends Component{
    render() {
        return(
            <div className={ this.props.status==='1'?styles.cubeLight:styles.cubeDark }></div>
        )
    }
}

export default Cube