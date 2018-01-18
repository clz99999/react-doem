import React,{Component} from 'react'
import * as loginActions from './Action/loginAction'
import loginStore from './store/loginStore'
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    login(){
        //登录成功执行以下的方法
       //点击登录触发一个Action
        loginActions.loginSuccess();
    }
    render = () => {
        return (
            <div>
                这是登录
                <button type="button" onClick={this.login.bind(this)}>点击登录</button>
            </div>
        )
    }
}
export default login