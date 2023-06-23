import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './pages/About' // 路由组件About
import Home from './pages/Home'  // 路由组件Home
import Header from './components/Header'  // 一般组件Header
import MyNavLink from './components/MyNavLink'  // 自定义组件MyNavLink

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

              {/* 使用activeClassName来设置点击时的样式 */}
              {/* <NavLink activeClassName='A-blue' className="list-group-item " to='/about'>About</NavLink>
              <NavLink activeClassName='A-green' className="list-group-item " to='/home'>Home</NavLink> */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
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
