import React, { Component } from 'react'
import List from './components/List'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {

  state = {
    todos: [
      { id: "001", name: 'food', done: true },
      { id: "002", name: 'music', done: false },
      { id: "003", name: 'swimming', done: true },
      { id: "004", name: 'reading', done: false }
    ]
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });

  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done };
      }
      else {
        return todoObj;
      }
    })

    this.setState({ todos: newTodos });

  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkAllTodos = (done) => {

    const { todos } = this.state;
    const newTodos = todos.map(todoObj => {
      return { ...todoObj, done: done }
    })
    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} />

      </div>
    )
  }
}
