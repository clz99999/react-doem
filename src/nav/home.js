import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 1
        }
    }

    render = () => {
        return (
            <div>
                <h1>这是首页</h1>
            </div>
        )
    }
}
export default home