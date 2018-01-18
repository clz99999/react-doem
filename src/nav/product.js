import React,{Component} from 'react'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'
class product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
    componentWillMount=()=>{
        this.getJson()
    }
    getJson(){
        var that=this;
        fetch('product.json')
            .then(function(response){
                return response.json()
            }).then(function(json){
            that.setState({
                data:json
            })
        }).catch(function(ex){
            console.log('parsing failed',ex)
        })
    }
    render = () => {
        let list = this.state.data.map((item, index)=> {
            return(
                <Link key={index} to={'/detail/'+item.id}>
                    <div>
                        <p>产品id：{item.id}</p>
                        <p>产品名字：{item.productName}</p>
                    </div>
                </Link>

            )
        });
        return (
            <div>
                <h1>这是产品列表</h1>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}
export default product