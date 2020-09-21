import React,{Component} from "react";
import './index.scss'
class Footer extends Component{
    render() {
        return(
            <div className="M-footer">{this.props.routerName}</div>
        )
    }
}
export default Footer