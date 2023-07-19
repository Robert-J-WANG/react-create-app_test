import React, { Component } from 'react'

import Item from '../Item'

export default class List extends Component {

  render() {
    const { todos, deleteTodo, updateChecked } = this.props
    return (
      <ul>
        {todos.map(todo => (<Item key={todo.id} {...todo} deleteTodo={deleteTodo} updateChecked={updateChecked} />))}
      </ul>
    )
  }
}
