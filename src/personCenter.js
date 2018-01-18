import React,{Component} from 'react'
import Login from './login'
class personCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    isLogin(){
        alert("这是父组件中的事件")
        this.setState({
            isLogin: true
        })
    }

    render = () => {
        return this.state.isLogin?(
            <div>
                <h1>这是个人中心</h1>
            </div>
        )
            :(
            <div>
                <Login isLogin={this.isLogin.bind(this)}></Login>
            </div>
        )
    }
}
export default personCenter