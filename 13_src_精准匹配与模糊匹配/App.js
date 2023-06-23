import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './pages/About' // 路由组件About
import Home from './pages/Home'  // 路由组件Home
import Test from './pages/Test'  // 路由组件Test
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
              精准匹配使用关键词exact， 只有路径完全相同是才能匹配成功 ， 
              默认的是模糊匹配：即发送 的路径左侧部分必须和接收的路径一样， 多级路径也能匹配成功。
              比如发送的路径'/about/a/b/c'，接收的路径'/about'，就能匹配，反之则不能
              */}
              <MyNavLink to='/about/a/b/c'>About</MyNavLink>
              <MyNavLink to='/home/a/b/c'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">

                <Switch>
                  {/* 精准匹配使用关键词exact， 只有路径完全相同是才能匹配成功 */}
                  <Route path='/about' component={About} />
                  <Route exact path='/home/a/b/c' component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
