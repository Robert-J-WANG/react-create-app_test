import React, { Component } from 'react'

import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: 'shopping', done: true },
            { id: '002', name: 'reading', done: false },
            { id: '003', name: 'swimming', done: true },
            { id: '004', name: 'skating', done: false },
            { id: '005', name: 'running', done: true },
        ]
    }

    addTodo = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => todo.id !== id)
        this.setState({ todos: newTodos })
    }

    updateChecked = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done }
            }
            else { return todo }
        })
        this.setState({ todos: newTodos })
    }

    updateAllChecked = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todo => ({ ...todo, done }));
        this.setState({ todos: newTodos })
    }

    deleteAllChecked = () => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => todo.done !== true);
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <h3>todo list demo</h3>
                <Header addTodo={this.addTodo} />
                <List todos={todos} deleteTodo={this.deleteTodo} updateChecked={this.updateChecked} />
                <Footer todos={todos} updateAllChecked={this.updateAllChecked} deleteAllChecked={this.deleteAllChecked} />
            </div >
        )
    }
}
