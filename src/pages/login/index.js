import React,{Component} from "react";
import './index.scss'
import Footer from "../../components/footer";

class Login extends Component{
    goHomePage(){
        this.props.history.push("/home")
    }
    render() {
        return(
            <div>
                <button onClick={this.goHomePage.bind(this)}>去首页</button>
                <Footer routerName="登陆页面"></Footer>
            </div>
        )
    }
}
export default Login