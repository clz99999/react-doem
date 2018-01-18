import React,{Component} from 'react'

class detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 1
        }
    }

    render = () => {
        return (
            <div>
                <h1>这是产品详情</h1>
                <h1>这是传过来的产品的id：{this.props.match.params.id}</h1>
            </div>
        )
    }
}
export default detail