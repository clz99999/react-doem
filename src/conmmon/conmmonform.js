/**
 * Created by Administrator on 2018/1/2.
 */

//1.引入react组件模块
import React, { Component } from 'react';
import './common.css'


//2.实例化组件
class Conmmonform extends Component{


    //渲染结构
    render=()=>{
        //JSX代码  一组建的HTML = VUE 中的模板
        return (
            <div className="Conmmonform">
                <form action="">
                    作者：<input type="text" ref="texa"/> <br/>
                    内容：<textarea name="" id="" cols="30" rows="10" ref="texc"></textarea> <br/>
                    <button type="button" onClick={this.handleClick}>点击评论</button> <br/>
                </form>
            </div>
        )
    };
    handleClick=(event)=>{
        var obj={author:this.refs.texa.value,content:this.refs.texc.value};
        this.props.addcommonList(obj)
    }
}


//3.暴露接口
export default Conmmonform;