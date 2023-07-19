import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import TodoList from './component/TodoList'
import RouterList from './component/RouterList'
import MyNavLink from './component/MyNavLink'


export default class App extends Component {
  render() {
    return (
      <div >
        <div className="list-group">
          <MyNavLink to='/todolist'> todoList</MyNavLink> <br />
          <MyNavLink to='/routerlist'> routerList</MyNavLink>
        </div>

        <hr />

        <div>
          {/* 使用Switch标签包裹，对于相同path的组件，当path第一次匹配成功后，停止继续匹配，提高效率 */}
          <Switch>
            <Route path='/todolist' component={TodoList} />
            <Route path='/routerlist' component={RouterList} />
            {/* 重定向 */}
            <Redirect to='/routerlist' />
          </Switch>
        </div>
      </div>
    )
  }
}
