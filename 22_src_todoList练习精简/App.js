import React, { Component } from 'react'

import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '吃饭2', done: false },
      { id: '003', name: '吃饭3', done: true },
      { id: '004', name: '吃饭4', done: false },
    ],
  }

  // add todos
  addTodos = (todoObj) => {
    //获取原状态
    const { todos } = this.state;
    //加工数据
    const newTodos = [todoObj, ...todos];
    //更新状态
    this.setState({ todos: newTodos });
  }

  // delete todos
  deleteTodos = (id) => {
    //获取原状态
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.filter(todo => todo.id !== id);
    //更新状态
    this.setState({ todos: newTodos });
  }

  // update checkbox
  updateTodos = (id, done) => {
    // 获取原状态
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map(todo => (todo.id === id) ? { ...todo, done } : todo);
    // 更新状态
    this.setState({ todos: newTodos });
  }

  // update checked all
  checkAllTodos = (done) => {
    // 获取原状态
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map(todo => ({ ...todo, done }));
    //更新状态
    this.setState({ todos: newTodos });
  }

  // delete checked all
  deleteAllCheckedTodos = () => {
    // 获取原状态
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.filter(todo => !todo.done);
    //更新状态
    this.setState({ todos: newTodos });
  }

  render() {
    // 获取原状态
    const { todos } = this.state;
    return (
      <div>
        <Header addTodos={this.addTodos} />
        <List todos={todos} deleteTodos={this.deleteTodos} updateTodos={this.updateTodos} />
        <Footer todos={todos} checkAllTodos={this.checkAllTodos} deleteAllCheckedTodos={this.deleteAllCheckedTodos} />
      </div>
    )
  }
}
