/**
 * Created by Administrator on 2018/1/2.
 */
//1.引入react组件模块
import React, { Component } from 'react';
import './common.css'


//2.实例化组件
class Conmmonbox extends Component{
    //渲染结构
    render=()=>{
        //JSX代码  一组建的HTML = VUE 中的模板
        return (
            <div className="commonbox">
                <h1>hello conmmonbox!</h1>
                <p>作者：{this.props.author}</p>
                <p>评论内容：{this.props.children}</p>
            </div>
        )
    }
}
//3.暴露接口
export default Conmmonbox;