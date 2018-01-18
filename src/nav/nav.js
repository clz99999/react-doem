import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 1
        }
    }
    render = () => {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/product">产品</Link></li>
                    <li><Link to="/personCenter">个人中心</Link></li>
                </ul>
            </div>
        )
    }
}
export default Nav