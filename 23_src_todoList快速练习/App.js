import React, { Component } from 'react'

import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭1', done: true },
      { id: '002', name: '吃饭2', done: false },
      { id: '003', name: '吃饭3', done: true },
      { id: '004', name: '吃饭4', done: false },
      { id: '005', name: '吃饭5', done: false },
    ],
  }

  // add todos
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos })
  }


  // delete todos
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  // update checkbox
  updateChecked = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => todo.id === id ? ({ ...todo, done }) : todo)
    this.setState({ todos: newTodos });
  }


  // update checked all
  updateCheckedAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => ({ ...todo, done }))
    this.setState({ todos: newTodos });
  }

  // delete checked all
  deleteCheckedAll = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.done)
    this.setState({ todos: newTodos });
  }


  render() {
    // 获取状态数据
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} updateChecked={this.updateChecked} />
        <Footer todos={todos} updateCheckedAll={this.updateCheckedAll} deleteCheckedAll={this.deleteCheckedAll} />
      </div>
    )
  }
}
