import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Conmmonbox from './conmmon/conmmonbox';
import Conmmonform from './conmmon/conmmonform';

import home from './nav/home';
import Nav from './nav/nav'
import product from './nav/product'
import detail from './detail'
import personCenter from './personCenter'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {dataList: [{'author': '施耐庵', 'content': 'content1'}, {'author': '西游记', 'content': 'content2'}]};
    }

    render = ()=> {
        let list = this.state.dataList.map((item, index)=> {
            return (<Conmmonbox key={index} author={item.author}>{item.content}</Conmmonbox>)
        });
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {list}
                <Conmmonform data={this.state.dataList} addcommonList={this.addcommonList}></Conmmonform>

                <Router>
                    <div>
                        <Nav></Nav>
                        <Route path="/home" component={home}></Route>
                        <Route path="/product" component={product}></Route>
                        <Route path="/detail/:id" component={detail}></Route>
                        <Route path="/personCenter" component={personCenter}></Route>
                    </div>
                </Router>


            </div>
        );
    };

    addcommonList = (obj)=> {
        let arr = [...this.state.dataList, obj]
        this.setState({
            dataList: arr
        })
    }
}

export default App;
