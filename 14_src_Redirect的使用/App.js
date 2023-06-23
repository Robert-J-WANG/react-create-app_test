import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import About from './pages/About' // 路由组件About
import Home from './pages/Home'  // 路由组件Home
import Header from './components/Header'  // 一般组件Header
import MyNavLink from './components/MyNavLink'  // 自定义组件MyNavLink

import './App.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

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

              {/* 
              
              */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">

                <Switch>
                  {/* Redirect 重定向， 可设置初次渲染页面时的路径 */}
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
