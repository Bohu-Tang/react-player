import React,{Component} from 'react'
import './index.scss'

class Cube extends Component{
    constructor(props) {
        super(props);
        this.state={
            value:null
        }
    }
    render() {
        return(
            <div className={this.props.indexValue==='0'?'M-cube':'M-cube active'} onClick={this.props.getChange} ></div>
        )
    }

}

export default Cube
