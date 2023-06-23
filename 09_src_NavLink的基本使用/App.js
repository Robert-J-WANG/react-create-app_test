import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from './pages/About' // 路由组件About
import Home from './pages/Home'  // 路由组件Home
import Header from './components/Header'  // 一般组件Header
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* NavLink 默认点击时，自动追加类名active */}
              {/* <NavLink className="list-group-item " to='/about'>About</NavLink>
              <NavLink className="list-group-item " to='/home'>Home</NavLink> */}

              {/* 使用activeClassName来设置点击时的样式 */}
              <NavLink activeClassName='A-blue' className="list-group-item " to='/about'>About</NavLink>
              <NavLink activeClassName='A-green' className="list-group-item " to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <h3>我是About的内容</h3> */}
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
